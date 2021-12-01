import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/themes'
import Routes from '../routes'

import Navbar from '../components/Navbar'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <Navbar />
      <Routes />
    </ThemeProvider>
  )
}

export default MyApp
