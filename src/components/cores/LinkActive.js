import Link from "next/link"
import { useRouter } from "next/router"

export default function LinkActive({ href, title }) {
   const { asPath } = useRouter()

   return (
      <Link href={href}>
         <a className={`${asPath === href ? "text-orange-400" : "dark:text-white"} text-[17px] h-full w-full block px-5 py-2 md:inline md:p-0`}>{title}</a>
      </Link>
   )
}