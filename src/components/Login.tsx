import { createUser } from "../services/userAPI"
import { useState } from "react"

export default function Login() {
  const [inputValue, setInputValue ] = useState<string>('')

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {

    setInputValue(e.target.value)
  }

  function handleButton () {
    createUser({name: inputValue})

    setInputValue('')
  }

  return (
  <div>
    <input
     type="text" 
     placeholder="Nome"
     value={inputValue}
     onChange={handleChange}
     />
    <button
    onClick={handleButton}
    >Entrar</button>
  </div>

)
}