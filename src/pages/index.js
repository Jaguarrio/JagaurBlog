import fs from "fs"
import path from "path"
import { useEffect, useState } from "react"

import Blog from "../components/blogs/Blog"

import matter from "gray-matter"
import _ from "lodash"

export default function Index({ blogs }) {

  const [tagSelected, setTagSelected] = useState("")
  const [blogsFilter, setBlogsFilter] = useState(blogs)
  const [search, setSearch] = useState("")

  const tags = _.union(blogs.map(blog => blog.frontmatter.tags).flat())

  function selectTag(tag) {
    if (tag === tagSelected) setTagSelected("")
    else setTagSelected(tag)
  }

  function onSubmit(e) {
    e.preventDefault()

    const result = _.filter(blogs, blog => {
      if (tagSelected) {
        if (blog.frontmatter.tags.some(tag => tagSelected === tag)
          && (blog.frontmatter.title.toLowerCase().includes(search.toLowerCase()) ||
            blog.frontmatter.title.toLowerCase().startsWith(search.toLowerCase()) ||
            blog.frontmatter.category.toLowerCase().startsWith(search.toLowerCase()) ||
            blog.frontmatter.category.toLowerCase().includes(search.toLowerCase()))
        ) return blog
      } else {
        if (blog.frontmatter.title.toLowerCase().includes(search.toLowerCase()) ||
          blog.frontmatter.title.toLowerCase().startsWith(search.toLowerCase()) ||
          blog.frontmatter.category.toLowerCase().startsWith(search.toLowerCase()) ||
          blog.frontmatter.category.toLowerCase().includes(search.toLowerCase())) return blog
      }
    })
    setBlogsFilter(result)
  }

  return (
    <article className="w-[90%] xl:container mx-auto py-10">
      <header className="pb-8">
        <h1 className="text-3xl dark:text-white">หน้าหลัก</h1>
        <div className="my-5 xl:hidden">
          <header className="text-lg dark:text-white">Tags (แท็ก)</header>
          <div className="mt-3">
            {tags.map(tag => (
              <button key={tag} onClick={() => selectTag(tag)}
                className={`${tagSelected === tag ? "bg-blue-600 text-white" : "text-blue-600"} border-2 border-blue-600  duration-300 rounded-xl px-2 h-[30px] font-semibold m-1`} >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <form onSubmit={onSubmit} className="flex items-center mt-8">
          <div className="relative w-[350px]">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input value={search} onInput={(e) => setSearch(e.target.value)} type="text" id="simple-search" className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Search" />
          </div>
          <button type="submit" className="p-2.5 text-sm font-medium rounded-r-lg text-white bg-blue-600 border border-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </header>

      <section className="grid xl:grid-cols-[3fr_1fr]">
        <article className="py-7  md:p-7 flex flex-wrap gap-5 max-w-full justify-center xl:justify-start">
          {_.sortBy(blogsFilter, blog => new Date(blog.frontmatter.date)).reverse().map((blog, index) => <Blog key={index} {...blog} />)}
        </article>
        <aside className="border-l-2 dark:border-gray-700 p-4 min-h-[500px] overflow-auto hidden xl:block">
          <header className="text-lg dark:text-white">Tags (แท็ก)</header>
          <div className="mt-3">
            {tags.map(tag => (
              <button key={tag} onClick={() => selectTag(tag)}
                className={`${tagSelected === tag ? "bg-blue-600 text-white" : "text-blue-600"} border-2 border-blue-600  duration-300 rounded-xl px-2 h-[30px] font-semibold m-1`} >
                {tag}
              </button>
            ))}
          </div>
        </aside>
      </section>
    </article>
  )
}



export async function getStaticProps() {
  const files = fs.readdirSync(path.join("public/data/blogs"))

  const blogs = files.map(fileName => {
    const slug = fileName.replace(".md", "")
    const markdownWithMeta = fs.readFileSync(path.join("public/data/blogs", fileName), "utf-8")

    const { data: frontmatter } = matter(markdownWithMeta)

    return { slug, frontmatter }
  })

  return {
    props: {
      blogs
    }
  }
}
