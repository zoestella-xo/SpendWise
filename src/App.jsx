import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Add from "./Components/Add";
import { useState } from "react";


export default function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard transactions={transactions} />} />
        <Route path="/add" element={<Add setTransactions={setTransactions} />} />
      </Routes>
      <Footer />
    </>
  )
}