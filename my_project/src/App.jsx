import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NetflixCards,{Header,Footer} from './components/Netflix'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React+humaira</h1>
      <NetflixCards />
      <Footer/>
    </>
  )
}

export default App
