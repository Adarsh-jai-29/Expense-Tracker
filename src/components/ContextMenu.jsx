import React from "react";
import "../App.css";

export default function ContextMenu({ menuPosition, setExpense, rowId }) {
  // if(!menuPosition.top) return

  return (
    <div className="context-menu" style={menuPosition}>
      <div>Edit</div>
      <div
        onClick={() => {
          setExpense((prevData) =>
            prevData.filter((elem) => {
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
