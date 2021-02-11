import './app.scss';
import AOS from "aos";
import React, {useEffect} from 'react'

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
   
  useEffect(() => {
    AOS.init({
      disable: function() {
        var maxWidth = 700;
        return window.innerWidth < maxWidth;
      },
      animatedClassName: 'animated',
      easing: "ease-out-cubic",
      once: true,
      offset: 200,
      duration: 800,
      mirror: true
    });
  }, []);
  
  return <Component {...pageProps} />



}



export default MyApp
