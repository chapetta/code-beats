import { useContext, useEffect } from "react";
import AlbumCard from "./AlbumCard";
import { MusicContext, type MusicContextType } from "../context/MusicContext";
import getMusics from "../services/musicsAPI";
import { useParams } from "react-router-dom";

export default function MusicCard () {

  const context = useContext(MusicContext);
  const { resultAlbuns } = context as MusicContextType

 

  return (
    <div>
    </div>
  )
}
