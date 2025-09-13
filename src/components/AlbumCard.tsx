interface AlbumCardProps {
  artworkUrl100: string;
  collectionName: string;
  artistName: string;
}

export default function AlbumCard({ artworkUrl100, collectionName, artistName }: AlbumCardProps) {
  return (
    <div className="card-container">
      <img src={artworkUrl100} alt="album-image" />
      <h4>{collectionName}</h4>
      <h6>{artistName}</h6>
    </div>
  );
}