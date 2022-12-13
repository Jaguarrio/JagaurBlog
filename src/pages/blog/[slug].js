import fs from "fs"
import path from "path"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

import _ from "lodash"
import matter from "gray-matter"
import { marked } from "marked"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faFacebookMessenger, faLine } from "@fortawesome/free-brands-svg-icons"

export default function blogPage({ frontmatter, content, blogList }) {
   const [openMenu, setOpenMenu] = useState(false)
   const { asPath } = useRouter()
   return (
      <main className="flex border-b-2 dark:border-gray-700">
         <aside className={`border-r-2 bg-white dark:bg-gray-800 dark:border-gray-700 fixed duration-300 md:transition-none ${openMenu ? "bottom-0 z-20" : "-bottom-full"} left-0 lg:sticky lg:top-16 w-full h-full lg:h-[93vh] lg:w-[25%] flex justify-end pl-5 xl:pl-0`}>
            <div className="w-full 2xl:w-3/5 xl:w-4/5 py-5 overflow-auto pr-3">
               <header className="text-[21px] dark:text-white">{frontmatter.category}</header>
               <ul className="text-[16px] mx-3 p-0 dark:text-gray-300">
                  {_.sortBy(blogList, blog => new Date(blog.frontmatter.date)).reverse().map(blog => (
                     <li key={blog.slug} className={`duration-100`}>
                        <Link href={`/blog/${blog.slug}`}>
                           <a onClick={() => setOpenMenu(false)} className={`block w-full truncate ${asPath.includes(blog.slug) ? "text-orange-400" : "hover:text-orange-400"}`}>-{blog.frontmatter.title}</a>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </aside>

         <button onClick={() => setOpenMenu(!openMenu)} className={`${openMenu ? "z-30" : ""} lg:hidden block fixed bottom-10 right-10 w-[70px] h-[70px] shadow-lg rounded-full bg-white`}>Menu</button>

         <section className="h-full w-full lg:w-[70%] xl:w-[50%] p-8">
            <h1 className="text-4xl mb-1 dark:text-white">{frontmatter.title}<span className="text-2xl text-gray-400"> ({frontmatter.category})</span></h1>
            {/* <div className="text-lg mb-8 dark:text-white">เนื้อหาเมื่อวันที่ <time>{new Date(frontmatter.date).toLocaleString("th", { dateStyle: "long" })}</time></div> */}
            <div className="markdown prose dark:prose-invert min-w-full text-[17px]" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            <div className="flex justify-between items-center pt-5 border-t-2 dark:border-gray-700">
               <article className="flex justify-between items-center  gap-5">
                  <Image src="/images/others/Me2.jpg" width={60} height={60} className="rounded-full" />
                  <div className="inline-block">
                     <div className="dark:text-white">ผู้เขียนบทความ : ภานุพงศ์ รักสนิท</div>
                     <div className="dark:text-white">Facebook : Phanupong Ruksanit</div>
                  </div>
               </article>
               <div className="flex justify-between items-center  gap-5">
                  <Link target={"_blank"} href="https://www.facebook.com/phanupong.ruksanit">
                     <FontAwesomeIcon className="w-7 h-7 hover:text-orange-400 dark:text-white dark:hover:text-blue-500 cursor-pointer" icon={faFacebook} />
                  </Link>
                  <Link target={"_blank"} href="https://m.me/phanupong.ruksanit">
                     <FontAwesomeIcon className="w-7 h-7 hover:text-orange-400 dark:text-white dark:hover:text-blue-500 cursor-pointer" icon={faFacebookMessenger} />
                  </Link>
                  <Link target={"_blank"} href="http://line.me/ti/p/~jaguar112233">
                     <FontAwesomeIcon className="w-7 h-7 hover:text-orange-400 dark:text-white dark:hover:text-blue-500 cursor-pointer" icon={faLine} />
                  </Link>
               </div>
            </div>
         </section>

      </main>
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