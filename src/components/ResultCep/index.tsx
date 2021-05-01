import { useSearch } from "../../hooks/useSearchCep"
import styles from './styles.module.scss'

export function ResultCep() {

  const { isSearch, error, fullInfoCep, clearCep } = useSearch()

  return (
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
  )
}