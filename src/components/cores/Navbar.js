import { useState } from "react"
import Link from "next/link"

import LinkActive from "./LinkActive"
import DarkMode from "./DarkMode"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
   const [toggleMenu, setToggleMenu] = useState(false)

   return (
      <nav className="h-[64px] sticky flex justify-between items-center top-0 border-b dark:border-slate-700 bg-white dark:bg-slate-900 z-10">
         <div className="w-4/5 xl:w-3/5 mx-auto flex justify-between items-center">
            <div className="flex items-center gap-x-5">
               <button onClick={() => setToggleMenu(true)} className="md:hidden dark:text-white"><FontAwesomeIcon icon={faBars} className="w-5 h-5" /></button>
               <Link href="/">
                  <a className="text-3xl dark:text-white">JAGUAR<span className="text-orange-400 text-[20px]">Blog</span></a>
               </Link>
            </div>

            <div className={`fixed md:static transition-[left] duration-300 top-0 w-full md:w-auto h-[100vh] md:h-auto bg-white dark:bg-slate-800 md:dark:bg-slate-900 md:flex justify-between items-center gap-x-3 shadow-2xl md:shadow-none ${toggleMenu ? "left-0" : "left-[-105%]"}`}>
               <div className="md:hidden px-6 py-3">
                  <span className="text-3xl dark:text-white">JAGUAR<span className="text-orange-400 text-[20px]">Blog</span></span>
                  <span onClick={() => setToggleMenu(false)} className="float-right text-2xl dark:text-white cursor-pointer"><FontAwesomeIcon icon={faTimes} className="w-5 h-5" /></span>
               </div>

               <ul className="md:flex gap-x-6 text-md">
                  <li className="hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent" onClick={() => setToggleMenu(false)}><LinkActive href="/" title="หน้าหลัก" /></li>
                  <li className="hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent" onClick={() => setToggleMenu(false)}><LinkActive href="/about" title="เกี่ยวกับ" /></li>
               </ul>
               <div className="md:border-l dark:border-slate-700 px-3 flex flex-col text-center justify-center">
                  <div className="mx-auto">
                     <DarkMode />
                  </div>
                  <small className="dark:text-white mt-6 md:hidden">By Phanupong Ruksanit</small>
               </div>
            </div>

         </div>
      </nav>
   )
}
