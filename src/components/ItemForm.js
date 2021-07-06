import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })

  const handleFormChange = event => {
    const key = event.target.name
    const value = event.target.value
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    onItemFormSubmit(formData)
    setFormData({
      id: uuid(),
      name: "",
      category: "Produce"
    })
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleFormChange}
        />
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={formData.category} 
          onChange={handleFormChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
