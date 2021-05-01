import { createContext, ReactNode, useContext, useState } from "react";
import api from "../services/api";

type FullInfoCepProps = {
  cep: string,
  city: string,
  neighborhood: string,
  state: string,
  street: string
}

type SearchCepContextData = {
  isCep: string,
  fullInfoCep: FullInfoCepProps,
  error: boolean,
  isSearch: boolean,
  SearchCep: () => void,
  clearCep: () => void,
  setValueSearch: (value: string) => void,
}

const SearchCepContext = createContext({} as SearchCepContextData)

type SearchCepContextProps = {
  children: ReactNode
}

export function SearchCepProvider({children}: SearchCepContextProps) {
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

  function setValueSearch(value: string) {
    setIsCep(value)
  }

  return (
    <SearchCepContext.Provider
      value={{
        isCep,
        fullInfoCep,
        error,
        isSearch,
        SearchCep,
        clearCep,
        setValueSearch
      }}
    >
      {children}
    </SearchCepContext.Provider>
  )
}

export const useSearch = () => {
  return useContext(SearchCepContext)
}