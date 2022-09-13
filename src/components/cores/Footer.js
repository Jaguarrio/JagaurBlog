import Link from "next/link"

export default function Footer() {
   return (
      <footer className="mt-16 text-center mb-8">
         <div className="dark:text-white">
            <small className="text-[15px]">© 2022-2023</small>
            <Link href="/about">
               <a className="ml-4 cursor-pointer duration-300 hover:text-green-500 text-[15px]">JAGUAR.</a>
            </Link>
         </div>
         <small className="block ml-5 mt-1 dark:text-white mb-5 text-[15px]">Engine : Nextjs & Tailwind css</small>
         <div className="flex gap-5 items-center justify-center">
            <Link href="#">
               <a className="text-md dark:text-white cursor-pointer text-[18px]">JAGUAR<span className="text-orange-400 text-[15px]">Project</span></a>
            </Link>
            <Link href="https://jjhomeproperty.com">
               <a className="text-md dark:text-white cursor-pointer text-[18px]">JJHome<span className="text-[#339dff] text-[15px]">Property</span></a>
            </Link>
         </div>
      </footer>
   )
}