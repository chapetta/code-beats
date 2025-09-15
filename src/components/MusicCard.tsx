import { useContext } from "react";
import { MusicContext, type MusicContextType } from "../context/MusicContext";

export default function MusicCard () {

  const context = useContext(MusicContext);
  const { resultAlbuns } = context as MusicContextType

 

  return (
    <div>
    </div>
  )
}
