import '../../styles/globals.scss'
import { SearchCepProvider } from '../hooks/useSearchCep'

function MyApp({ Component, pageProps }) {
  return (
    <SearchCepProvider>
      <Component {...pageProps} />
    </SearchCepProvider>
  )
}

export default MyApp
