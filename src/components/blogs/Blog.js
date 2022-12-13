import Image from "next/image"
import Link from "next/link"
import _ from "lodash"

export default function Blog(props) {
   const { slug, frontmatter } = props
   return (
      <Link href={`/blog/${slug}`}>
         <a>
            <div className="max-w-[325px] min-w-[325px] h-[450px] shadow-lg rounded-lg bg-white dark:bg-slate-800 overflow-hidden">
               <div className="relative h-[45%]">
                  <Image src={frontmatter.coverImage} className="rounded-t-lg object-contain" priority="true" layout="fill" alt={frontmatter.title} />
               </div>
               <div className="p-3 flex flex-col h-1/2">
                  <h5 className="text-[22px] dark:text-white font-semibold">{frontmatter.title}</h5>
                  <p className="dark:text-gray-400">{_.truncate(frontmatter.description, { length: 75 })}</p>
                  {/* <time className="mt-auto dark:text-white">{new Date(frontmatter.date).toLocaleString("th", { dateStyle: "long" })}</time> */}
               </div>
            </div>
         </a>
      </Link >
   )
}
