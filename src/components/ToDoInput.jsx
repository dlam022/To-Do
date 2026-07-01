import { useState } from "react";

function ToDoInputs({ heading = "My Tasks" }) {
  const [input, setInput] = useState("");
  const [todos, setToDos] = useState([]);

  const addToDo = () => {
    if (input === "") {
      console.log("nothing");
      return;
    }
    setToDos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const deleteToDo = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const toggleToDo = (id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <>
      <h1>{heading}</h1>
      <div className="input-row">
        <input
          className="user-input"
          placeholder="What needs to be done?"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addToDo();
            }
          }}
        />
        <button className="add-btn" onClick={addToDo}>
          Add
        </button>
      </div>

      <ul className={todos.length > 0 ? "todo-list" : ""}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              className="check-input"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleToDo(todo.id)}
            />
            <span className={todo.completed ? "todo-text completed" : "todo-text"}>
              {todo.text}
            </span>
            <button className="delete-btn" onClick={() => deleteToDo(todo.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoInputs;
