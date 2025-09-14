import { useParams } from "react-router-dom";
import MusicCard from "./MusicCard";
import { useEffect, useState } from "react";
import getMusics from "../services/musicsAPI";
import type { AlbumType, SongType } from "../../types";
import Loading from "./Loading";

export default function Album() {
  const [infoAlbum, setInfoAlbuns] = useState<(AlbumType | SongType)[]>([]);
  const [isLoading, setIsLoading ] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMusics = async (id: string) => {
      setIsLoading(true)
      const result = await getMusics(id);
      setInfoAlbuns(result);
      setIsLoading(false)
    };
    if (id) {
      fetchMusics(id)
    }
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : <MusicCard /> }
      
    </div>
  );
}
