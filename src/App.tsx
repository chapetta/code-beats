import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Search from "./components/Search"
import Album from "./components/Album"
import { Favorites } from "./components/Favorites"
import { Profile } from "./components/Profile"
import { Layout } from "./components/Layout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Layout />}>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
          <Route path="/favorites" element={ <Favorites />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
