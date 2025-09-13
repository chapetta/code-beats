import { useState } from "react";
import searchAlbumsAPI from "../services/searchAlbunsAPI";
import Loading from "./Loading";
import type { AlbumType } from "../../types";
import AlbumCard from "./AlbumCard";
import { Link } from "react-router-dom";

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
      {resultAlbuns.length > 0 ? 
      <div>
        <h3>Resultado de albuns de: {resultAlbuns[0].artistName}</h3>
        <div className="cardList-container">
        {resultAlbuns.map((album) => (
          <Link to={`/album/{album.collectionId}`} key={album.collectionId}>
          <AlbumCard
            key={album.collectionId}
            artworkUrl100={album.artworkUrl100}
            collectionName={album.collectionName}
            artistName={album.artistName}g
            />
            </Link>
        ))}
        </div>

      </div>  
      : <h3>Nenhum álbum foi encontrado</h3>}
    </div>
  );
}

