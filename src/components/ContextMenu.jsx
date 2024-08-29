import React from "react";
import "../App.css";

export default function ContextMenu({
  menuPosition,
  setExpense,
  rowId,
  setExpenses,
  expense,
  setEditingRowId
}) {
  // if(!menuPosition.top) return

  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          setEditingRowId(rowId)
      const foundExpense = expense.find(elem=> elem.id == rowId)
      // console.log(foundExpense)
          setExpenses((prev) => ({ ...prev,title: foundExpense.title,
            category: foundExpense.category,
            amount: foundExpense.amount,} ));
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpense((prevData) =>
            prevData.filter((elem) => {
              // console.log(elem)
              return elem.id !== rowId;
            })
          );
        }}
      >
        Delete
      </div>
    </div>
  );
}
