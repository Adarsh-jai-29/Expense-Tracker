import React from "react";

export default function ExpenseForm({ setExpense }) {
  const getFormInfo = (form) => {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }
    return data;
  }
  const formHandel = (e) => {
    e.preventDefault();
    setExpense((prevState) => [...prevState, {...getFormInfo(e.target),id:crypto.randomUUID()}]);
  };

  return (
    <form className="expense-form" onSubmit={formHandel}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" required>
          <option value="">All</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" name="amount" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
