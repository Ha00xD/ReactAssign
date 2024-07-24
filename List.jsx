import React, { useContext, useState } from "react";
import Context from "./Context";

const List = ({ lists: { title, id, isDelete } }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newInput, setNewInput] = useState(title);
  const [editInput, setEditInput] = useState(true);

  const { deleteList, editList } = useContext(Context);

  const handleDelete = () => {
    if (confirm("Do you want to delete list ?")) {
      deleteList(id);
    }
  };

  const handleUndo = () => {
    if (confirm("Do you want to Undo list ?")) {
      deleteList(id);
    }
  };

  const handleEdit = () => {
    setIsEdit(true);
    setEditInput(false);
  };

  const handleUpdate = () => {
    editList(id, newInput);
    setIsEdit(false);
    setEditInput(true);
  };

  const handleNewInput = (event) => {
    setNewInput(event.target.value);
  };

  return (
    <div>
      {isDelete ? (
        <div>
          {isEdit && (
            <form onSubmit={handleUpdate}>
              {" "}
              <input type="text" value={newInput} onChange={handleNewInput} />
              <button onClick={handleUpdate}>Update</button>
            </form>
          )}

          <div>
            <li style={{ display: "block" }}>{title}</li>
            <button onClick={handleUndo}>Undo</button>
            <button onClick={handleEdit} disabled>
              Edit
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            {isEdit && (
              <div>
                {" "}
                <input type="text" value={newInput} onChange={handleNewInput} />
                <button onClick={handleUpdate}>Update</button>
              </div>
            )}
            {editInput && (
              <div>
                <li style={{ display: "block" }}>{title}</li>
              </div>
            )}
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
