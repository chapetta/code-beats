import { useParams } from "react-router-dom";
// import MusicCard from "./MusicCard";
import { useEffect, useState } from "react";
import getMusics from "../services/musicsAPI";
import type { AlbumType, SongType } from "../../types";
import Loading from "./Loading";
import { MusicCard } from "./MusicCard";

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
        <div>
          <section>
            <h2>{(infoAlbum[0] as AlbumType).collectionName}</h2>
            <p>{(infoAlbum[0] as AlbumType).artistName}</p>
          </section>

          <section>
            {infoAlbum.map((music) => (
              <MusicCard key={(music as SongType).trackId} 
              music={(music as SongType)}
              />

            ))}
          </section>
        </div>
        }
      </div>
      
      }
      
    </div>
  );
}
