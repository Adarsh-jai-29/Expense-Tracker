import React, { useState } from "react";

export default function ExpenseForm({ setExpense }) {
  // ------------------------------------------------------------
  // old method
  // const getFormInfo = (form) => {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formData) {
  //     data[key] = value;
  //   }
  //   return data;
  // }
  // ------------------------------------------------------------
  const [expenses, setExpenses] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const formHandel = (e) => {
    e.preventDefault();
    console.log(expenses)

    setExpense((prevState) => [
      ...prevState,
      {...expenses,id:crypto.randomUUID()} ,
    ]);
    setExpenses({
      title: "",
      category: "",
      amount: ""})
  };


  return (
    <form className="expense-form" onSubmit={formHandel}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expenses.title}
          onChange={(e) => {
            setExpenses((prev) => ({ ...prev, title: e.target.value }));
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category"  value={expenses.category} onChange={(e) => {
            setExpenses((prev) => ({ ...prev, category: e.target.value }));
          }} required>
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
        <input id="amount" type="number" name="amount" value={expenses.amount} onChange={(e) => {
            setExpenses((prev) => ({ ...prev, amount: e.target.value }));
          }} />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
