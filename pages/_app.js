import Aiassistant from "@/components/Aiassistant";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Meta from "@/components/Meta";
import ScrollContext from "@/components/ScrollContext";
import "@/styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Global settings:
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 100,
      delay: 0,
      duration: 900,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

  }, []); // Ensure this runs only once
  return <>
    <ScrollContext>
      <Meta/>
      <Header />
      <Aiassistant/>
      <Component {...pageProps} />
      <Footer/>
    </ScrollContext>

  </>
}
