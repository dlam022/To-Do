import { useState } from "react";

function ToDoInputs({ heading = "My Tasks" }) {
  const [input, setInput] = useState("");
  const [todos, setToDos] = useState([]);

  const addToDo = () => {
    if (input === "") {
      console.log("nothing")
      return
    }
    setToDos([...todos, input])
    setInput("")
  }


  return (
    <>
      <h1>{heading}</h1>
      <input
        placeholder="What needs to be done?"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if(event.key === "Enter") {
            addToDo();
          }
        }}
      />
      <button onClick={addToDo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDoInputs;
