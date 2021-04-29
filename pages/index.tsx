import { useState } from 'react'
import styles from '../styles/home.module.scss'
import api from '../services/api'

type FullInfoCepProps = {
  cep: string,
  city: string,
  neighborhood: string,
  state: string,
  street: string
}


export default function Home() {
  const [isCep, setIsCep] = useState('')
  const [fullInfoCep, setFullInfoCep] = useState<FullInfoCepProps>()

  function SearchCep() {
    const response = api.get(isCep)

    response.then(result => {
      setFullInfoCep(result.data)
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <h4>Pesquise por um CEP</h4>
        <input type="number" placeholder="digite um cep" onChange={event => setIsCep(event.target.value)}/>
        <button onClick={SearchCep}>Pesquisar</button>
      </div>
      <div className={styles.card}>
        { fullInfoCep && (
          <ul>
            <li>{fullInfoCep.cep}</li>
            <li>{fullInfoCep.city}</li>
            <li>{fullInfoCep.neighborhood}</li>
            <li>{fullInfoCep.state}</li>
            <li>{fullInfoCep.street}</li>
          </ul>
        )}
      </div>
    </div>
  )
}
