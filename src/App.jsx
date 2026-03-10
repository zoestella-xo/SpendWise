import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Add from "./Components/Add";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </>
  )
}