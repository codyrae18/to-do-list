import React, { useEffect, useState } from "react";

const Todobody = () => {
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/todoItems")
      .then((response) => response.json())
      .then((todoItems) => {
        console.log(todoItems);
        setTodoList(todoItems);
      });
  }, []);

  return (
    <div>
      {todoList ? (
        todoList.map((todo) => <h1 key={todo.id}>{todo.task}</h1>)
      ) : (
        <h1>empty</h1>
      )}
    </div>
  );
};

export default Todobody;
