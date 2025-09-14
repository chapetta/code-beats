import { useParams } from "react-router-dom";
import MusicCard from "./MusicCard";
import { useEffect, useState } from "react";
import getMusics from "../services/musicsAPI";
import { AlbumType, SongType } from "../../types";


export default function Album () {
  const [ infoAlbum, setInfoAlbuns ] = useState<AlbumType | SongType>([])


  const { id } = useParams<{ id: string }>();

  const fetchMusics = async(id: string ) => {
      const result = await getMusics(id)
      setInfoAlbuns(result)
 }

 
 useEffect(async () => {
  await fetchMusics(id)
}, [])

  return (
    <div>
      <MusicCard />
    </div>
  )
}