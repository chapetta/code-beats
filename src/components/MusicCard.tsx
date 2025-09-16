import type { SongType } from "../../types"
import { useState } from "react"
import checkedHeart from "../assets/checked_heart.png"
import emptyHeart from "../assets/empty_heart.png"

type MusicCardProps = {
  music: SongType,
}

export function MusicCard ({music}: MusicCardProps) {
  const [ isFavorite, setIsFavorite ] = useState<boolean>(false)
  const [imgChechked, setImgChecked] = useState<string>("")

    function handleCheckBox () {
      if (!isFavorite) {
        setImgChecked("../assets/checked_heart.png")
        setIsFavorite(true)
      } else {
        setImgChecked("../assets/empty_heart.png")
        setIsFavorite(false)
      }
    }
  return (
    <div>
      <p>{music.trackName}</p>
      <audio data-testid="audio-component" src={music.previewUrl} controls>
      <track kind="captions" />
      O seu navegador não suporta o elemento{" "} <code>audio</code>.
      </audio>
      <label>
      <input type="checkbox" 
      onChange={handleCheckBox}
      checked={isFavorite}
      />
      <img 
      src={isFavorite ? checkedHeart : emptyHeart} 
      alt="favorite" 
      
      
      />
      </label>
    </div>
  )
}
