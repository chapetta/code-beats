import { createContext } from "react";
import type { AlbumType } from "../../types";

export type MusicContextType = {
  resultAlbuns: AlbumType[];
  setResultAlbuns: (album: AlbumType[]) => void;
};

export const MusicContext = createContext<MusicContextType | undefined>(undefined)