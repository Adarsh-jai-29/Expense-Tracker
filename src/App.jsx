import './App.css'
import ExpenseTable from './components/ExpenseTable'
import ExpenseForm from './components/ExpenseForm'
import { useState } from 'react'
import ExpenseData from './ExpenseData'

function App() {
const [expense,setExpense] = useState(ExpenseData)
  return (
    <>

    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
   <ExpenseTable expense={expense} setExpense={setExpense}/>
   <ExpenseForm setExpense={setExpense}/>
   
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
