import { useSyncExternalStore } from 'react';

// native external store
const store = {
  state: { count: 0 },
  setState: (fn) => {
    store.state = fn(store.state); // requires immutable update
    store.listeners.forEach((listener) => listener());
  },
  listeners: new Set(),
  subscribe: (callback) => {
    store.listeners.add(callback);
    return () => store.listeners.delete(callback);
  },
  getSnapshot: () => {
    const snap = Object.freeze(store.state); // freeze is optional
    return snap;
  },
};

// use external store
const StoreComponent = () => {
  const snap = useSyncExternalStore(store.subscribe, store.getSnapshot);
  return <div className="flex">{snap.count}</div>;
};

export default StoreComponent;
