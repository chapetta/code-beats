import type { AlbumType } from "../types";
import { MusicContext } from "./MusicContext";
import { useState, type ReactNode } from 'react';

export default function MusicProvider({ children }: { children: ReactNode }) {

  const [resultAlbuns, setResultAlbuns] =  useState<AlbumType[]>([])


  return (
    <MusicContext.Provider value={{ resultAlbuns, setResultAlbuns }}>
      
      {children }

    </MusicContext.Provider>
  )
}