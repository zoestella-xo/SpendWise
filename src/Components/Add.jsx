import { useState } from "react";
import AddExpenses from "./AddExpenses";
import AddIncome from "./AddIncome";

export default function Add() {
    const [active, setActive] = useState("income");

    return (
    <div>
        <div id="add-tabs">
            <button onClick={() => setActive("income")} className={`add-income-btn ${active === "income" ? "active-btn" : ""}`}>ADD INCOME</button>
            <button onClick={() => setActive("expenses")} className={`add-expenses-btn ${active === "expenses" ? "active-btn" : ""}`}>ADD EXPENSES</button>
        </div>
        {active === "income" ? <AddIncome /> : <AddExpenses />}
    </div>
    )
}