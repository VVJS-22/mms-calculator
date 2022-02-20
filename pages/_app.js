import { ThemeProvider } from 'styled-components'
import theme from '../public/styles/theme'
import '../public/styles/styles.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
