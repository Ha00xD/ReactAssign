import React, { useState } from "react";
import List from "./List";
import Context from "./Context";

const App = () => {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newList = {
      id: Math.random(),
      title: text,
      isDelete: false,
    };
    setLists([...lists, newList]);
    setText(" ");
  };

  const deleteList = (id) => {
    setLists(
      lists.map((list) => {
        if (list.id === id) {
          list.isDelete = !list.isDelete;
        }
        return list;
      })
    );
  };

  const handleNewInput = (event) => {
    setText(event.target.value);
  };

  const editList = (id, newInput) => {
    setLists(
      lists.map((list) => {
        if (list.id === id) {
          list.title = newInput;
        }
        return list;
      })
    );
  };

  return (
    <Context.Provider value={{ deleteList, editList }}>
      <div>
        <h1>Todo Lists</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={handleNewInput} />
          <button type="submit">Add</button>
        </form>
        {lists
          .filter((list) => list.isDelete === false)
          .map((list) => (
            <List lists={list} key={list.id} />
          ))}
        <span>========================</span>
        {lists
          .filter((list) => list.isDelete === true)
          .map((list) => (
            <List lists={list} key={list.id} />
          ))}
      </div>
    </Context.Provider>
  );
};

export default App;
