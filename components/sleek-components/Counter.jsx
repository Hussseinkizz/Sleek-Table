import { useStore } from "../react-hands-v2";

const Counter = () => {
  const [state, dispatch] = useStore();

  const handleIncrement = () => {
    dispatch({ action: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ action: "decrement" });
  };

  const updateUser = () => {
    dispatch({ action: "updateUser", payload: "kizz" });
  };
  const removeUser = () => {
    dispatch({ action: "unSetUser" });
  };

  const showError = () => {
    dispatch({ action: "showError" });
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="flex">user: {state.userState}</h1>
      <h1 className="flex">User Local: {state.local_userState}</h1>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button className="text-red-500" onClick={showError}>
        Some Error
      </button>
      <button onClick={updateUser}>signin</button>
      <button onClick={removeUser}>signout</button>
    </div>
  );
};

export default Counter;
