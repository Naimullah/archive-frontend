// import { Route } from "lucide-react"
import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import {createContext,useEffect,useState} from 'react'
import Sidebar from "./components/sidebar/Sidebar"
import Header from './components/header/Header';
const Mycontext=createContext();
function App() {
const values={}
  return (
    <>
    <BrowserRouter>
    <Mycontext.Provider value={values}>
    <section className="main flex">
       <div className="sidebarWrapper w-[15%]">
        <Sidebar />
       </div>
       <div className="content_Right w-[85%] px-3">
        <Header />
        <div className="space"></div>
        <Routes>
          <Route path="/" exact={true} element={<Dashboard />} />
        </Routes>
       </div>
      </section>
    </Mycontext.Provider>
    </BrowserRouter>
    
    </>
  )
}

export default App
