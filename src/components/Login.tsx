import { createUser } from "../services/userAPI"
import { useState } from "react"
import Loading from "./Loading"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [inputValue, setInputValue ] = useState<string>('')
  const [isLoading, setIsLoading ] = useState<boolean>(false)

  const navigate = useNavigate();

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {

    setInputValue(e.target.value)
  }

  async function handleButton () {
    setIsLoading(true)
   await  createUser({name: inputValue})
    setInputValue('')
    setIsLoading(false)
    navigate('search')
  }

  return (
    <>
      {isLoading ? <Loading /> : 
        <div>
          <input
            type="text" 
            placeholder="Nome"
            value={inputValue}
            onChange={handleChange}
          />
          <button onClick={handleButton}>Entrar</button>
        </div>
      }
    </>
  )
}