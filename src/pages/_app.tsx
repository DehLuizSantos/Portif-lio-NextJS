import { AppProps } from "next/app";

import GlobalStyle from '../styles/global';
import { ThemeProvider } from "styled-components";
import theme from "../styles/themes";

import  Navbar  from "../components/Navbar";
import  Header  from "../components/Header";
import  About  from "../components/About";
import Projects from "../components/Projects";
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>

      <Component {...pageProps} />
      <GlobalStyle />

        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />

      

    </ThemeProvider>
  )
}

export default MyApp
