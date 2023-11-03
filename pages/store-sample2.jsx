import { useCallback, useEffect, useState } from 'react';

// library code

const createStore = (initialState) => {
  let state = initialState;
  const getState = () => state;

  const listeners = new Set();
  const setState = (fn) => {
    state = fn(state);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  return { getState, setState, subscribe };
};

const useStore = (store, selector) => {
  const [state, setState] = useState(() => selector(store.getState()));
  useEffect(() => {
    const callback = () => setState(selector(store.getState()));
    const unsubscribe = store.subscribe(callback);
    callback();
    return unsubscribe;
  }, [store, selector]);
  return state;
};

// application code
const store = createStore({ count: 0, text: 'hello' });

const Counter = () => {
  const count = useStore(
    store,
    useCallback((state) => state.count, [])
  );
  const inc = () => {
    store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  return (
    <div className="flex">
      {count}
      <button onClick={inc}>+1</button>
    </div>
  );
};

const TextBox = () => {
  const text = useStore(
    store,
    useCallback((state) => state.text, [])
  );
  const setText = (event) => {
    store.setState((prev) => ({ ...prev, text: event.target.value }));
  };
  return (
    <div className="flex">
      <input value={text} type="text" onChange={setText} />
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col">
      <Counter />
      <Counter />
      <TextBox />
      <TextBox />
    </div>
  );
};

export default App;
