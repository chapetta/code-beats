import { useParams } from "react-router-dom";
// import MusicCard from "./MusicCard";
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
      console.log(result)
      setInfoAlbuns(result);
      setIsLoading(false)
      console.log(id)
    };
    if (id) {
      fetchMusics(id)
    }
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : 
      <div>
        {infoAlbum.length > 0 &&

          <h2>{(infoAlbum[0] as AlbumType).collectionName}</h2>
        }
      </div>
      
      }
      
    </div>
  );
}
