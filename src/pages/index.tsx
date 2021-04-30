import { useState } from 'react'
import styles from '../../styles/home.module.scss'
import api from '../services/api'

import { FiSearch } from 'react-icons/fi'

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
  const [error, setError] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  function SearchCep() {
    const response = api.get(isCep)

    response
      .then(result => {
        setFullInfoCep(result.data)
        setIsSearch(true)
        setError(false)
      })
      .catch(() => {
        setError(true)
        setIsSearch(false)
      })
  }

  function clearCep() {
    setIsSearch(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <h4>Consultar Cep</h4>
        <div className={styles.search}>
          <input type="number" placeholder="Digite um cep" onChange={event => setIsCep(event.target.value)}/>
          <div className={styles.buttonSearch} onClick={SearchCep}><FiSearch /></div>
        </div>
      </div>
      
      <div className={styles.result}>
        { !isSearch && (
          <div className={styles.noCep}>
            <img src={!error ? './images/happy.svg' : './images/sad.svg'} alt="Happy"/>
            <h4>
              { !error 
                ? 'Olá, iremos apresentar o endereço de acordo com o CEP que você digitar'
                : 'Infelizmente não achamos nada com esse CEP'
              }
            </h4>
          </div>
        )}
        
        { isSearch && (
          <div className={styles.resultSucess}>
            <img src="./images/sucess.svg" alt="Sucesso"/>
            <div className={styles.card}>
              <ul>
                <li><span>CEP:</span> {fullInfoCep.cep}</li>
                <li><span>Estado: </span> {fullInfoCep.state}</li>
                <li><span>Logradouro: </span> {fullInfoCep.street}</li>
                <li><span>Cidade: </span> {fullInfoCep.city}</li>
                <li><span>Bairro: </span> {fullInfoCep.neighborhood}</li>
              </ul>
            </div>

            <button onClick={clearCep}>Limpar busca</button>
          </div>
        )}
      </div>
    </div>
  )
}
