import { useSearch } from '../../hooks/useSearchCep'

import { FiSearch } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SearchBox() {
  const { setValueSearch, SearchCep } = useSearch()

  return (
    <div className={styles.searchBox}>
      <h4>Consultar CEP</h4>
      <div className={styles.search}>
        <div className={styles.inputBlock}>
          <input type="number" placeholder="Digite um cep" onChange={event => setValueSearch (event.target.value)}/>
        </div>
        <div className={styles.buttonSearch} onClick={SearchCep}><FiSearch /></div>
      </div>
    </div>
  )
}