// import { Route } from "lucide-react"
// import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import {createContext,useEffect,useState} from 'react'
// import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/Users";
// import Settings from "./pages/Settings";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from './routes/AppRoutes';
const Mycontext=createContext();
function App() {
const values={}
  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <div className="flex flex-col w-full">
      <Header />
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-800">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  </div>
  )
}

export default App
