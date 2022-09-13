import '../../styles/globals.css'

import NextNProgress from "nextjs-progressbar"

import Navbar from "../components/cores/Navbar"
import Footer from "../components/cores/Footer"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="orange"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: "ease" }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}