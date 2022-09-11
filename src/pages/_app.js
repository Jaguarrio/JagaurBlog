import '../../styles/globals.css'

import Navbar from "../components/cores/Navbar"
import Footer from "../components/cores/Footer"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}