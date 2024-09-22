import { ApiState } from "./ApiState";
import { Todo } from "./Todo";
import { useCreateTodos } from "../api/react-query";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useQueryClient } from "@tanstack/react-query";

const _TodoApp = ({ todos, deleteExistingTodo, editExistingTodo  }) => {

  const [task, setTask] = useState("");
  const { mutate, isPending } = useCreateTodos();
  const queryClient = useQueryClient();

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ["Todo"] });
  };

  return (
    <div className="flex flex-column gap-1">
      <div className="flex gap-1">
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button
          disabled={isPending}
          onClick={() => {
            mutate({ task, id: uuid(), done: false });
            setTask("");
          }}
        >
          {isPending ? "loading..." : "Add Todo"}
        </button>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      {todos?.length === 0 ? (
        <div>No todos available</div>
      ) : (
        (todos ?? []).map((todo) => <Todo key={todo.id} todo={todo} deleteExistingTodo={deleteExistingTodo} editExistingTodo={editExistingTodo}/>)
      )}
    </div>
  );
};

export const TodoApp = ApiState(_TodoApp);
