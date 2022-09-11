import Image from "next/image"

export default function RelatedSite({ site }) {
   return (
      <div className="bg-white dark:bg-gray-800 rounded-md min-w-[300px] max-w-[400px] shadow-md p-5">
         <header className="text-center">
            <Image className="mx-auto" width="80" height="80" src={site.image} alt="" />
            <h3 className="text-2xl my-3 dark:text-white cursor-pointer">{site.header}</h3>
         </header>
         <p className="dark:text-gray-400 text-[19px] min-h-[300px]">{site.description}</p>
         <div className="text-center">
            <button className={`px-4 py-2 text-white rounded-md ${site.statusOpen ? "bg-blue-500" : "bg-gray-500"}`}>{site.statusOpen ? "เยี่ยมชมเว็บไซต์" : "ยังไม่เปิดใช้งาน"}</button>
         </div>
      </div>
   )
}
