import Header from "./components/Header"
import MainContainer from "./components/MainContainer"
import Container from '@mui/material/Container'
import InputContainer from "./components/InputContainer"
import { useState } from "react"

const App = () => {
  const [prompt, setPrompt] = useState('');
  return (
    <>
      <Header />
      
      <MainContainer prompt={prompt} />

      <InputContainer setPrompt={setPrompt}  />

    </>
  )
}

export default App
