import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import '../styles/styles.css'
import { ResultProvider } from '../store/contexts/resultContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ResultProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ResultProvider>
    </>
  )
}
