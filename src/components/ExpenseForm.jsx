import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

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
  const [errorMessage, setErrorMessage] = useState({});

  const validate = (formData) => {
    const errorData = {};
    if (!formData.title) {
      errorData.title = "Please add title";
    }
    if (!formData.category) {
      errorData.category = "Please select a category";
    }
    if (!formData.amount) {
      errorData.amount = "Please add amount";
    }
    setErrorMessage(errorData);
    console.log(errorData);
    return errorData;
  };
  const formHandel = (e) => {
    e.preventDefault();
    const validateResult = validate(expenses);

    console.log(validateResult);
    if (Object.keys(validateResult).length) return;
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
    const value = name === "amount" ? Number(e.target.value) : e.target.value;
    setExpenses((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="expense-form" onSubmit={formHandel}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expenses.title}
        onChange={handelChange}
        error={errorMessage.title}
      />

      <Select
        label="Category"
        id="category"
        name="category"
        value={expenses.category}
        onChange={handelChange}
        error={errorMessage.category}
        option={['Grocery','Clothes','Bills','Education','Medicine']}
      />

      <Input
        label="Amount"
        id="amount"
        type="number"
        name="amount"
        value={expenses.amount}
        onChange={handelChange}
        error={errorMessage.amount}
      />

      <button className="add-btn">Add</button>
    </form>
  );
}
