import fs from "fs"
import path from "path"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import _ from "lodash"
import matter from "gray-matter"
import { marked } from "marked"

export default function blogPage({ frontmatter, content, blogList }) {
   const [openMenu, setOpenMenu] = useState(false)
   const { asPath } = useRouter()
   return (
      <div className="flex border-b-2 dark:border-gray-700">
         <aside className={`border-r-2 bg-white dark:bg-gray-800 dark:border-gray-700 fixed duration-300 md:transition-none ${openMenu ? "bottom-0 z-20" : "-bottom-full"} left-0 lg:sticky lg:top-16 w-full h-full lg:h-[93vh] lg:w-[25%] flex justify-end pl-5 xl:pl-0`}>
            <div className="w-full 2xl:w-3/5 xl:w-4/5 py-5 overflow-auto pr-3">
               <header className="text-[21px] dark:text-white">{frontmatter.category}</header>
               <ul className="text-[16px] mx-3 p-0 dark:text-gray-300">
                  {blogList.map(blog => (
                     <li key={blog.slug} className={`duration-100`}>
                        <Link href={`/blog/${blog.slug}`}>
                           <a className={`block w-full ${asPath.includes(blog.slug) ? "text-orange-400" : "hover:text-orange-400"}`}>-{blog.frontmatter.title}</a>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </aside>

         <button onClick={() => setOpenMenu(!openMenu)} className={`${openMenu ? "z-30" : ""} lg:hidden block fixed bottom-10 right-10 w-[70px] h-[70px] shadow-lg rounded-full bg-white`}>Menu</button>

         <section className="h-full w-full lg:w-[70%] xl:w-[50%] p-8">
            <h1 className="text-4xl mb-1 dark:text-white">{frontmatter.title}<span className="text-2xl text-gray-400"> ({frontmatter.category})</span></h1>
            <div className="text-lg mb-8 dark:text-white">เนื้อหาเมื่อวันที่ <time>{new Date(frontmatter.date).toLocaleString("th", { dateStyle: "long" })}</time></div>
            <div className="prose dark:prose-invert min-w-full" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
         </section>

      </div>
   )
}

export async function getStaticProps({ params: { slug } }) {
   const markdownWithMeta = fs.readFileSync(path.join("public/data/blogs", slug + ".md"), "utf-8")
   const { data: frontmatter, content } = matter(markdownWithMeta)

   const files = fs.readdirSync(path.join("public/data/blogs"))

   const blogList = files.map(fileName => {
      const slug = fileName.replace(".md", "")
      const markdownWithMeta = fs.readFileSync(path.join("public/data/blogs", fileName), "utf-8")

      const { data: frontmatter } = matter(markdownWithMeta)

      return { slug, frontmatter }
   })

   return {
      props: {
         frontmatter,
         content,
         blogList: _.groupBy(blogList, blog => blog.frontmatter.category)[frontmatter.category]
      },
   }
}

export async function getStaticPaths() {
   const files = fs.readdirSync(path.join("public/data/blogs"))

   const paths = files.map((filename) => ({
      params: {
         slug: filename.replace(".md", ""),
      },
   }))

   return {
      paths,
      fallback: false,
   }
}