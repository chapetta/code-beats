import type { SongType } from "../../types"

type MusicCardProps = {
  music: SongType,
}

export function MusicCard ({music}: MusicCardProps) {

  return (
    <div>
      <p>{music.trackName}</p>
      <audio data-testid="audio-component" src={music.previewUrl} controls>
      <track kind="captions" />
      O seu navegador não suporta o elemento{" "} <code>audio</code>.
      </audio>
    </div>
  )
}
