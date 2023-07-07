import React, { useState, useEffect } from "react";

const Todos = () => {
const [todoList, setTodoList] = useState(null);

useEffect(() => {
(async () => {
const todos = await fetch(
"https://jsonplaceholder.typicode.com/todos"
);
setTodoList(todos.data);
})();
}, []);

return todoList ? (
    <ul>
        {todoList.map((todo, index) => (
        <li key={index} data-testid="todo">{todo.title}</li>
        ))}
    </ul>
    ) : (
    <p>Loading....</p>
    );
};

export default Todos;