import React, { useContext } from "react";
import Context from "./Context";

const Form = () => {
  const { handleSubmit, handleNewInput, text } = useContext(Context);
  return (
    <div>
      {" "}
      <h1>Todo Lists</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleNewInput} />
        <button type="submit" style={{ cursor: "pointer" }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
