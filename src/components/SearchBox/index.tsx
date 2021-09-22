import { useSearch } from "../../hooks/useSearchCep";
import InputMask from "react-input-mask";

import { FiSearch } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SearchBox() {
  const { setValueSearch, SearchCep } = useSearch();

  return (
    <div className={styles.searchBox}>
      <h4>Consultar CEP</h4>
      <div className={styles.search}>
        <div className={styles.inputBlock}>
          <InputMask
            mask="99999-999"
            maskChar={null}
            placeholder="Digite um cep"
            onChange={(event: any) => setValueSearch(event.target.value)}
          />
        </div>
        <button className={styles.buttonSearch} onClick={SearchCep}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
}
