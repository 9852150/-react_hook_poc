import React, { useReducer, useState } from "react";

// Initial state
const initialState = {
  items: [], // List of items
  exp: [],
};

// Reducer function
function reducer(state, action) {
  debugger;
  switch (action.type) {
    case "add":
      return { ...state, items: [...state.items, action.payload] };
    case "update":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        ),
      };
    case "delete":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

function CRUDApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null); // To handle item updates

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle adding a new item
  const handleAddItem = () => {
    if (input.trim() === "") return; // Do not add empty items
    const newItem = { id: Date.now(), text: input };
    dispatch({ type: "add", payload: newItem });
    setInput(""); // Clear input after adding
  };

  // Handle editing an item
  const handleEditItem = (itemId) => {
    const itemToEdit = state.items.find((item) => item.id === itemId);
    setInput(itemToEdit.text);
    setEditId(itemId); // Set item ID to update
  };

  // Handle updating the item
  const handleUpdateItem = () => {
    if (input.trim() === "") return;
    dispatch({ type: "update", payload: { id: editId, text: input } });
    setInput(""); // Clear input after updating
    setEditId(null); // Reset editId to null
  };

  // Handle deleting an item
  const handleDeleteItem = (itemId) => {
    dispatch({ type: "delete", payload: itemId });
  };

  return (
    <div>
      <h1>CRUD Operations with useReducer</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter item"
      />
      {editId ? (
        <button onClick={handleUpdateItem}>Update Item</button>
      ) : (
        <button onClick={handleAddItem}>Add Item</button>
      )}
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleEditItem(item.id)}>Edit</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CRUDApp;
