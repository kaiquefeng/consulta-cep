import Head from 'next/head'
import styles from '../../styles/home.module.scss'
import { ResultCep } from '../components/ResultCep'
import { SearchBox } from '../components/SearchBox'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Consulta CEP</title>
      </Head>
      <SearchBox />
      <ResultCep />
    </div>
  )
}
