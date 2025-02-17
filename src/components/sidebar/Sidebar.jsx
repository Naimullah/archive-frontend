import React, { useContext, useState } from 'react'
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
// import { Button } from "@/components/ui/button"
// import Button from "../../ui/button";
// import Button from "../ui/button"; // ✅ Corrected relative path
import { Button } from "../ui/button"; // ✅ Named import
import { MdDashboardCustomize } from "react-icons/md";
import {FaAngleRight, FaFolderMinus } from "react-icons/fa"
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";



const Sidebar = () => {
  const [activeTab, setActiveTab]=useState(0)
  const[isToggleSubmenu,setIsToggleSubmenu]=useState(false);
  // const context=useContext(MyContext);
  const isOpenSubmenu=(index)=>{
    setActiveTab(index)
    setIsToggleSubmenu(!isToggleSubmenu)
  }
  return (
    <>
    <div className="sidebar fixed top-0 left-0 z-[100] w-[15%]">
      <Link to="/">
        <div className="logoWrapper py-8 px-18">
          <img src={Logo} className='w-100' />
        </div>
      </Link>
      {/* //mr-3 means margin  */}
      <div className="sidebarTab px-3 mt-4 ">
        <ul>
          <li  className='flex gap-4 flex-col mb-2 '>
          <Button className={`w-100 {activeTab==0 ? 'active':''}`}  onClick={()=>isOpenSubmenu(0)}>
           <span className='icon  w-[30px] h-[30px] flex items-center justify-center rounded-md'><MdDashboardCustomize /> </span>
           Dashboard
           </Button>
          </li>
          <li className={`${activeTab===1 && isToggleSubmenu===true? 'colapse':'colapsed'}`}>
          <Button className={`w-100 flex items-center justify-center mb-2 {activeTab===1 ? 'active':''}`}  onClick={()=>isOpenSubmenu(1)}>
           <span className='icon  w-[30px] h-[30px] flex items-center justify-center rounded-md'><FaFolderMinus  /> </span>
           Icome
           <span className='arrow ml-auto w-[25px] items-center justify-center'><FaAngleRight /></span>
           </Button>
           <div className="submenu">
            <button className='w-100 '> 
             In</button>
            <button className='w-100 '> 
             Out</button>
           </div>

          </li>
          <li>
            
           <Button className="w-100 flex items-center justify-center mb-2">
           <span className='icon  w-[30px] h-[30px] flex items-center justify-center rounded-md'><IoIosNotificationsOutline /> </span>
           Notification
           </Button>
          </li>
          <li>
            
           <Button className="w-100 flex items-center justify-center mb-2">
           <span className='icon  w-[30px] h-[30px] flex items-center justify-center rounded-md'><CiSettings /> </span>
           Settings
           </Button>
          </li>
          <li>
              <h5 className='text-block/70 capitalize px-1'>AUTH</h5>
             </li>
             <li>
             <Button className="w-100 flex items-center justify-center mb-2">
           <span className='icon  w-[30px] h-[30px] flex items-center justify-center rounded-md'><FaRegUser /> </span>
           Users
           </Button>
             </li>
            
        </ul>
      
       

          

      </div>

    </div>
    </>
  )
}

export default Sidebar
