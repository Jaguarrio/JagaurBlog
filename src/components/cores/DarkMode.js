import { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudSun, faCloudMoon } from "@fortawesome/free-solid-svg-icons"

export default function DarkMode() {
   const [toggleDarkMode, setToggleDarkMode] = useState(false)

   useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify({ dark: toggleDarkMode }))

      const darkModeValue = localStorage.getItem("darkMode")
      if (JSON.parse(darkModeValue)?.dark) {
         document.body.parentNode.setAttribute("class", "dark")
         document.body.setAttribute("class", "bg-slate-900")
      } else {
         document.body.parentNode.removeAttribute("class")
         document.body.removeAttribute("class")
      }

   }, [toggleDarkMode])

   return <FontAwesomeIcon onClick={() => setToggleDarkMode(!toggleDarkMode)} icon={toggleDarkMode ? faCloudSun : faCloudMoon} className="dark:text-white cursor-pointer w-6 h-6" />
}