import { useEffect, useState } from "react";
import { addNewTodo, fetchTodos } from "../../store/todoSlice";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import TodoList from "../../components/Todo/TodoList";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [input, setInput] = useState("");
  const { status, error } = useSelector(
    (state) => (state as { todos: { status: string; error: null } }).todos
  );
  const dispatch = useDispatch<ThunkDispatch<string, unknown, Action>>();
  const handler = () => {
    dispatch(addNewTodo(input));
    setInput("");
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      {status === "loading" && <h1>Loading .....</h1>}
      {status === "rejected" || status === "loading" ? (
        <h1>{error}</h1>
      ) : (
        <>
          {" "}
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={handler}>add Todo</button>
          <TodoList />
        </>
      )}
    </div>
  );
};
export default Home;
