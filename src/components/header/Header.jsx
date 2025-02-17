import React, { useState } from 'react'
import { Button } from "../ui/button"; // ✅ Named import
import { CiBellOn } from "react-icons/ci";
import { IoMdMailOpen } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import UserImage from '../userImage/UserImage';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
const Header = () => {
    const [ancherEl, setAncherEl] =useState(null)
    const open=Boolean(ancherEl)
    const handleClick=(event)=>{
        setAncherEl(event.currentTarget)
    }
    const handleClose=()=>{
        setAncherEl(null)
    }
  return (
    <header className='fixed top-0 right-0 bg-white py-3 z-[100] flex items-center justify-between'>
        <div className="searchbox w-[300px] h-[40px] relative">
            <CiSearch  className='absolute top-3 left-2 z-[10]'/>
             <input type="text" className='w-[100%] h-[100%] px-9 cursor-pointer' placeholder='search here'/>
        </div>
      <div className="ml-auto part2 px-3">
        <ul className='flex items-center gap-3'>
        <li>
                <Button> <IoMdMailOpen /> </Button>
            </li>
            <li>
                <Button> <CiBellOn /> </Button>
            </li>
           <li>
            <div className="myAcc" onClick={handleClick}>
                {/* <Button> */}
                <DropdownMenu>
                <DropdownMenuTrigger>
                <UserImage />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <DropdownMenuItem>
                    Log out
                    {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                    <span className="ml-auto text-xs opacity-50">⇧⌘Q</span>

                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
                {/* </Button> */}
            </div>
                

           </li>
            </ul>
      </div>
    </header>
  )
}

export default Header
