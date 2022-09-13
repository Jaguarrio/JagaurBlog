import { faFacebook, faFacebookMessenger, faLine, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const contactData = [
   { link: "https://www.facebook.com/phanupong.ruksanit", logo: faFacebook, social: "Facebook", text: "ชื่อ : Phanupong Ruksanit" },
   { link: "https://m.me/phanupong.ruksanit", logo: faFacebookMessenger, social: "Facebook Messenger", text: "ชื่อ : Phanupong Ruksanit" },
   { link: "http://line.me/ti/p/~jaguar112233", logo: faLine, social: "ID Line", text: "ไอดี : jaguar112233" },
   { link: "https://www.instagram.com/jagaradoz_/", logo: faInstagram, social: "Instagram", text: "ชื่อ : jagaradoz_" },
   { link: "https://twitter.com/Jaguar260733687", logo: faTwitter, social: "Twitter", text: "ชื่อ : @Jaguar260733687" },
   { link: "https://github.com/Jaguarrio", logo: faGithub, social: "Github", text: "ชื่อ : Jaguarrio" },
]

const websitesData = [
   {
      image: "/images/others/Ja.png",
      header: <>JAGUAR<span className="text-orange-400 text-[21px]">Project</span></>,
      description: "เว็บไซต์นี้มีชื่อว่า Jaguar Project ตามชื่อเลยครับ เว็บไซต์นี้เป็นเว็บที่รวบรวมโปรเจกต์ที่น่าสนใจต่างๆพร้อมกับอธิบายการทำงานของแต่ละ project เหมาะสำหรับผู้ที่เริ่มพัฒนาเว็บและไม่รู้ว่าโปรเจกต์เหล่านี้ทำงานยังไงหรือผู้ที่ต้องการดูหน้าตาการทำงานเฉยๆ ก็สามารถเข้ามาเยี่ยมชมที่นี่ได้",
      statusOpen: false,
      link : ""
   },
   {
      image: "/images/others/JJHome.png",
      header: <>JJHome<span className="text-[#339dff] text-[21px]">Property</span></>,
      description: "เว็บไซต์นี้มีชื่อว่า JJ Home Property เป็นชื่อของธุรกิจที่แม่ของผม เป็นธุรกิจที่เป็นนายหน้าในการบริการฝากขายอสังหาริมทรัพย์ ดูแลลูกค้าฝากขายบ้านแบบ One Stop Service การตลาดที่เป็นมืออาชีพ หากสนใจสามารถที่จะเยี่ยมชมเว็บไซต์โดยการกดที่ปุ่มข้างล่างนี่ได้เลย",
      statusOpen: true,
      link : "https://jjhomeproperty.com"
   },
   {
      image: "/images/others/Ja.png",
      header: <>JAGUAR<span className="text-orange-400 text-[21px]">Blog</span></>,
      description: "เว็บไซต์นี้มีชื่อว่า Jaguar Blog ผมจัดทำบทความนี้ขึ้นมาคนเดียวเท่านั้น สร้างเพื่อใช้ในการทำ Portfolio และการทำบทความแบ่งปันความรู้ในเรื่องต่างๆที่ผมนั้นพอที่จะรู้ทั้ง คอมพิวเตอร์ คณิตศาสตร์ วิทยาศาสตร์ ภาษาอังกฤษ Technologies และอื่นๆอีกมากมาย เพื่อประโยชน์แก่ผู้อื่นหน้าไม่มากก็น้อย",
      statusOpen: true,
      link : "/"
   },
]


export {
   contactData,
   websitesData
}