import { MusicContext } from "./MusicContext";
import type { ReactNode } from 'react';

export default function MusicProvider({ children }: { children: ReactNode }) {


  return (
    <MusicContext.Provider value={{}}>
      
      {children }

    </MusicContext.Provider>
  )
}