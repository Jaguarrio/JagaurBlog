import '../../styles/globals.css'

import { useEffect } from "react"
import { useRouter } from "next/router"
import NProgress from "nprogress"

import HeadComp from "../components/cores/HeadComp"
import Navbar from "../components/cores/Navbar"
import Footer from "../components/cores/Footer"

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleStart = (url) => NProgress.start()

    const handleStop = () => NProgress.done()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <HeadComp />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}