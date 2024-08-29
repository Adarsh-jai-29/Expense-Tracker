import './App.css'
import ExpenseTable from './components/ExpenseTable'
import ExpenseForm from './components/ExpenseForm'
import { useState } from 'react'
import ExpenseData from './ExpenseData'

function App() {
const [expense,setExpense] = useState(ExpenseData)
const [expenses, setExpenses] = useState({
  title: "",
  category: "",
  amount: "",
});
const [editingRowId,setEditingRowId] = useState('')

  return (
    <>

    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
   <ExpenseTable expense={expense} setExpense={setExpense} setExpenses={setExpenses} setEditingRowId={setEditingRowId} />
   <ExpenseForm expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId} />
   
        <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
        </div>
      </div>
    </main>
 
    </>
  )
}

export default App
