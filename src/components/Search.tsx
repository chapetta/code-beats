import { useState } from "react";
import searchAlbumsAPI from "../services/searchAlbunsAPI";
import Loading from "./Loading";
import type { AlbumType } from "../types";

export default function Search () {
  const [inputValue, setInputValue ] = useState<string>('')
  const [isLoading, setIsLoading ] = useState<boolean>(false)
  const [resultAlbuns, setResultAlbuns ] = useState<AlbumType[]>([])


  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  async function handleButton () {
    setInputValue('')
    const result = await searchAlbumsAPI(inputValue)
    setResultAlbuns(result)
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <input
            type="text"
            placeholder="Nome do Artista"
            value={inputValue}
            onChange={handleChange}
          />
          <button onClick={handleButton}>Procurar</button>
        </div>
      )}
    </div>
  );
}

