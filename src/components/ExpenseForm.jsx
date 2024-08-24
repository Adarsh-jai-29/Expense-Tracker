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
  const [errorMessage,setErrorMessage] = useState({})

  const validate = (formData) => {
    const errorData = {} 
    if (!formData.title) {
    errorData.title = 'Please add title';
    };
    if (!formData.category) {
    errorData.category = 'Please select a category';
    };
    if (!formData.amount) {
    errorData.amount = 'Please add amount';
    };
    setErrorMessage(errorData)
    return errorData
  };
  const formHandel = (e) => {
    e.preventDefault();
    console.log(expenses);
   const validateResult = validate(expenses);

    console.log(validateResult)
    setExpense((prevState) => [
      ...prevState,
      { ...expenses, id: crypto.randomUUID() },
    ]);
    setExpenses({
      title: "",
      category: "",
      amount: "",
    });
  };
  const handelChange = (e) => {
    const name = e.target.name;
    setExpenses((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <form className="expense-form" onSubmit={formHandel}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expenses.title}
          onChange={handelChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expenses.category}
          onChange={handelChange}
         
        >
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
        <input
          id="amount"
          type="number"
          name="amount"
          value={expenses.amount}
          onChange={handelChange}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
