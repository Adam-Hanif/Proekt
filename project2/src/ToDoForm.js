import { useState } from "react";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const hadleChange = (event) => {
    setUserInput(event.currentTarget.value);
  };
  return (
    <form className="form_input" onClick={handleSubmit}>
      <button className="buttonInput">
        <span>+</span>
      </button>
      <input
        className="input_form"
        value={userInput}
        type="text"
        onChange={hadleChange}
        placeholder="Новая задача"
      />
    </form>
  );
}

export default ToDoForm;
