import React, { useReducer, useState } from "react";

const CrudReducer = () => {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(false);
  const initialState = {
    items: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, items: [...state.items, action.payload] };
      case "delete":
        return {
          ...state,
          items: state.items.filter(({ id }) => id != action.payload),
        };
      case "update":
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, text: action.payload.text }
              : item
          ),
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAdd = () => {
    if (input.trim() === "") return;
    const data = { id: new Date().getTime(), text: input };
    dispatch({ type: "add", payload: data });
    setInput("");
  };
  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: id });
  };
  const handleEdit = (itemId) => {
    const editedItem = state.items.find(({ id }) => id === itemId);
    setInput(editedItem.text);
    setEditId(itemId);
  };
  const handleUpdate = () => {
    dispatch({ type: "update", payload: { id: editId, text: input } });
    setInput("");
    setEditId(null);
  };
  return (
    <div className=" p-10 bg-slate-400 h-screen">
      <div>
        <input
          name="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-black p-4 rounded-lg"
        />
        <button
          className="text-[32px] pl-4 text-blue-950"
          onClick={editId ? handleUpdate : handleAdd}
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>
      <div>
        {state.items.map(({ id, text }) => (
          <div key={id}>
            <span>{text}</span>
            <span className="p-6 cursor-pointer" onClick={() => handleEdit(id)}>
              Edit
            </span>
            <span
              className="p-6 cursor-pointer"
              onClick={() => handleDelete(id)}
            >
              delete
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudReducer;
