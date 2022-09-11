import { contactData } from "../../../public/data/aboutData"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Contact() {
   const blogs = contactData.map(item => (
      <a key={item.social} href={item.link} target="_blank">
         <div className="contactItem border-b-2 dark:border-gray-700 gap-5 px-3 py-2 flex justify-start items-center">
            <i className="dark:text-white"><FontAwesomeIcon icon={item.logo} className="w-7 h-7" /></i>
            <div className="w-4/5 text-lg">
               <h2 className="dark:text-white">{item.social}</h2>
               <h4 className="dark:text-gray-400">{item.text}</h4>
            </div>
         </div>
      </a >
   ))

   return (
      <div className="text-start">
         <h1 className="text-lg my-3 text-center dark:text-white">ช่องทางการติดต่อ</h1>
         <section>{blogs}</section>
      </div>
   )
}