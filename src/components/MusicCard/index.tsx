import type { SongType } from "../../types"
import { useState } from "react"
import checkedHeart from "../../assets/checked_heart.png"
import emptyHeart from "../../assets/empty_heart.png"

type MusicCardProps = {
  music: SongType,
}

export function MusicCard ({music}: MusicCardProps) {
  const [ isFavorite, setIsFavorite ] = useState<boolean>(false)

    function handleCheckBox () {
      if (!isFavorite) {
        setIsFavorite(true)
      } else {
        setIsFavorite(false)
      }
    }
  return (
    <div className="music-card">
      <p>{music.trackName}</p>
      <audio src={music.previewUrl} controls>
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
