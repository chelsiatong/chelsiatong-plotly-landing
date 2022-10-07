// import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
// import DarkTheme from '../src/components/DarkTheme'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {

  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   themeCheck();
  // }, [darkMode]);

  // useEffect(() => {
  //   themeCheck();
  // }, []);

  // const themeCheck = () => {
  //   if (
  //     localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add('dark');
  //     setDarkMode(true);
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     setDarkMode(false);
  //   }


  return (
    <ChakraProvider>
      {/* <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
