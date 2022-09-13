import Image from "next/image"
import Link from "next/link"

import Contact from "../components/cores/Contact"

import { websitesData } from "../../public/data/aboutData"
import RelatedSite from "../components/cores/RelatedSite"

export default function About() {
   return (
      <>
         <header className="container mx-auto grid lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr] mt-10 p-5">
            <div className="text-center p-5">
               <Image src="/images/others/Me1.jpg" width="225" height="225" className="rounded-full block w-64 mx-auto mb-5 select-none" />
               <div className="hidden lg:block">
                  <Contact />
               </div>
            </div>
            <div className="text-lg">
               <h1 className="text-3xl dark:text-white">ประวัติส่วนตัว</h1>
               <div className="my-8 border-l-4 border-orange-400 px-3">
                  <p className="dark:text-white">ชื่อจริง : <span className="dark:text-gray-400">ภานุพงศ์ รักสนิท</span></p>
                  <p className="dark:text-white">ชื่อเล่น : <span className="dark:text-gray-400">เจอาร์</span></p>
                  <p className="dark:text-white">เพศ : <span className="dark:text-gray-400">ชาย</span></p>
                  <p className="dark:text-white">คติประจำใจ : <span className="text-orange-400">ความพยายามไม่มีทางโกหกใคร</span></p>
               </div>
               <p className="px-3 my-8 dark:text-gray-400">สวัสดีครับ จะขอเรียกแทนตัวเองว่า"ผม"นะครับ ผมชื่อเล่นชื่อเจอาร์ หรือจะเรียก เจ , จา หรือจะเรียกแบบไหนก็ได้ที่อยากเรียก หมายถึงแบบไหนก็ได้ที่เป็นคำที่สุภาพนะ😅 ผมชอบการเขียนโปรแกรมมากและชอบการแก้ปัญหา Error ที่เกิดขึ้น ชอบที่เวลาแก้ปัญหาอะไรได้เสร็จก็จะรู้สึกดีใจที่สุด</p>
               <div className="px-3 my-8">
                  <h6 className="text-2xl mb-1 dark:text-white font-semibold">ทำไมต้อง Jaguar ?</h6>
                  <p className="dark:text-gray-400">Jaguar (เสือจากัวร์ 🐯 ) เป็นชื่อหรือฉายาที่ผมนิยามตัวเองขึ้นมาเกิดจากเพื่อนสนิทของผมในสมัยเรียนนั้นชอบเรียกผมว่าจาแทนที่จะเป็น เจอาร์ ดังนั้นผมจึงคิดชื่อที่ดูเท่ๆขึ้นไปอีกจึงได้มาเป็นชื่อนี้ ผมรู้สึกชอบชื่อนี้มากๆและรู้สึกอยากที่จะขอบคุณเพื่อนที่ช่วยเรียกผมแบบนั้น จนกระทั่งในตอนนี้ผมก็ยังใช้ชื่อนี้ในการทำอะไรหลายๆอย่างอยู่</p>
               </div>
               <div className="px-3 my-8">
                  <h6 className="text-2xl mb-1 dark:text-white font-semibold">สิ่งที่ทำให้สนใจมาด้านนี้</h6>
                  <p className="dark:text-gray-400">ผมเป็นนักเรียนที่กำลังศึกษาอยู่ชั้นปีที่ 6 โรงเรียนสมุทรปราการ มีความฝันที่จะเป็น Full Stack และอาชีพอื่นๆที่เกี่ยวกับไอทีอีกมากมาย ผมเริ่มศึกษาการเขียนโปแกรมตั้งแต่กลางปี 2563 ด้วยภาษา lua ในเกม Roblox จนกระทั่งสิ้นปี 2563 ด้วยความที่มองไม่ค่อยเห็นอนาคตในสายเกมนี้กับหลายๆองค์ประกอบที่ไม่มี จึงได้ล้มเลิกการฝึกเขียนโปรแกรม จากนั้นผ่านไปสักพัก 1 ปีผมจึงได้หันมาศึกษาภาษา HTML CSS Javascript และ Framework ของ Javascript เพราะแม่ของผมต้องการที่จะได้เว็บไซต์เป็นของตัวเองเพื่อทำธุรกิจ นั้นจึงเป็นแรงจูงใจให้หันกลับมาสนใจการเขียนโปรแกรมอีกครั้งและสนใจที่จะศึกษามากขึ้นทุกๆวัน จึงได้เป็นเว็บไซต์ <span> JJHome<span className="text-[#339dff]">Property</span></span> และเว็บไซต์ต่อๆมาก็คือเว็บไซต์นี้</p>
                  <p className="dark:text-gray-400 my-5"><span className="dark:text-white">การ์ตูนที่ชอบ (อยากใส่เฉยๆ)</span> : One piece(วันพีซ) , Classroom of elite (ห้องเรียนนิยมเฉพาะยอดคน)</p>
               </div>
               <section className="mt-5">
                  <h5 className="text-2xl dark:text-white">ทักษะการทำงาน</h5>
                  <article className="grid md:grid-cols-2 gap-y-5 pl-5">
                     <div>
                        <h6 className="text-orange-400">Front-End (Web Development)</h6>
                        <div>
                           <ul className="list-disc list-inside pl-5">
                              <li className="dark:text-gray-400">HTML & CSS</li>
                              <li className="dark:text-gray-400">Javascript</li>
                              <li className="dark:text-gray-400">ReactJs Library</li>
                              <li className="dark:text-gray-400">NextJs Framework</li>
                           </ul>
                        </div>
                     </div>
                     <div>
                        <h6 className="text-orange-400">Back-End & Database (Web Development)</h6>
                        <div>
                           <ul className="list-disc list-inside pl-5">
                              <li className="dark:text-gray-400">NodeJs & Express</li>
                              <li className="dark:text-gray-400">MySQL</li>
                              <li className="dark:text-gray-400">MongoDB</li>
                           </ul>
                        </div>
                     </div>
                     <div>
                        <h6 className="text-orange-400">Tools</h6>
                        <div>
                           <ul className="list-disc list-inside pl-5">
                              <li className="dark:text-gray-400">CLI</li>
                              <li className="dark:text-gray-400">Git & Github</li>
                           </ul>
                        </div>
                     </div>
                  </article>
               </section>
               <hr className="my-8 block lg:hidden" />
               <div className="block lg:hidden">
                  <Contact />
               </div>
            </div>
         </header>

         <hr className="container mx-auto my-20" />

         <article>
            <section className="container mx-auto flex flex-col xl:flex-row justify-between">
               <div className="max-w-[800px] flex flex-col justify-center gap-y-10 px-2 order-2 xl:order-none">
                  <div className="border-l-4 px-3 border-orange-400">
                     <h3 className="text-4xl dark:text-white mb-5">ประวัติเว็บไซต์</h3>
                     <p className="dark:text-gray-400 text-md text-[19px]">เว็บไซต์นี้มีชื่อว่า Jaguar Blog สร้างเพื่อใช้ในการทำ Portfolio และการทำบทความแบ่งปันความรู้ในเรื่องต่างๆที่ผมนั้นพอที่จะรู้ทั้ง คอมพิวเตอร์ คณิตศาสตร์ วิทยาศาสตร์ ภาษาอังกฤษ Technologies และอื่นๆอีกมากมาย หลักการในการทำเว็บไซต์นี้ก็คือใช้งานง่าย เข้าถึงได้ ผมจะเน้นไปที่เรื่องการเข้าถึงที่ง่ายและไม่มีอะไรซับซ้อนโดยจะสังเกตได้จากหน้าหลักและเกี่ยวกับซึ่งมีอยู่แค่ 2 หน้า เพื่อประโยชน์แก่ผู้อื่นที่เข้ามาเยี่ยมชมไม่มากก็น้อย ขอขอบคุณทุกท่านนะครับ ^^</p>
                  </div>
                  <div className="px-2 flex flex-col gap-5 sm:flex-row ">
                     <Link href="/">
                     <a className="text-center bg-orange-400 border-2 border-orange-400  px-6 py-2 text-white rounded-md">อ่านบทความ</a>
                     </Link>
                     <a href="tel:0949797766" className="text-center border-2 border-blue-500 px-6 py-2 text-blue-500 hover:bg-blue-500 hover:text-white duration-200 rounded-md">ติดต่อ (เบอร์โทรศัพท์)</a>
                  </div>
               </div>
               <img src="/images/others/logo.svg" alt="" className="max-w-[700px] mx-auto order-1 xl:order-none relative" />
            </section>
         </article>

         <hr className="container mx-auto my-20" />

         <article id="related-websites" className="container mx-auto px-3">
            <h2 className="text-4xl dark:text-white mb-2">Related Websites</h2>
            <p className="text-[19px] dark:text-gray-400 mb-6">เว็บไซต์ที่เกี่ยวข้อง</p>
            <section className="p-3 grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
               {websitesData.map((site,index) => <RelatedSite key={index} site={site} />)}
            </section>
         </article>
      </>
   )
}
