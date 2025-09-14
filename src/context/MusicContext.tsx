import { createContext, type Dispatch, type SetStateAction } from "react";
import type { AlbumType } from "../../types";

export type MusicContextType = {
  resultAlbuns: AlbumType[];
  setResultAlbuns: Dispatch<SetStateAction<AlbumType[]>>;
};

export const MusicContext = createContext<MusicContextType | undefined>(undefined)