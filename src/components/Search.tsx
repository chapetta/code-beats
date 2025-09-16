    import { useState } from "react";
    import searchAlbumsAPI from "../services/searchAlbunsAPI";
    import Loading from "./Loading";
    import type { MusicContextType } from "../context/MusicContext";
    import AlbumCard from "./AlbumCard";
    import { Link } from "react-router-dom";
    import { useContext } from "react";
    import { MusicContext } from "../context/MusicContext";

    export default function Search () {
      const [inputValue, setInputValue ] = useState<string>('')
      const [isLoading, setIsLoading ] = useState<boolean>(false)

      const context = useContext(MusicContext)
      const {resultAlbuns, setResultAlbuns } = context as MusicContextType



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
            <div className="search-container">
              <input
                className="search-input"
                type="text"
                placeholder="Nome do Artista"
                value={inputValue}
                onChange={handleChange}
              />
              <button
               onClick={handleButton}
               className="search-button"
               >
                Procurar</button>
            </div>
          )}
          {resultAlbuns.length > 0 ? 
          <div>
            <h3>Resultado de albuns de: {resultAlbuns[0].artistName}</h3>
            <div className="cardList-container">
            {resultAlbuns.map((album) => (
              <Link to={`/album/${album.collectionId}`} key={album.collectionId}>
              <AlbumCard
                key={album.collectionId}
                artworkUrl100={album.artworkUrl100}
                collectionName={album.collectionName}
                artistName={album.artistName}
                />
                </Link>
            ))}
            </div>

          </div>  
          : <h3>Nenhum álbum foi encontrado</h3>}
        </div>
      );
    }

