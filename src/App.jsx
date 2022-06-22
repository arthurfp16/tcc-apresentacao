import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  return (
    <button className='button'
      onClick={
        (event) => {
          setCount(count + 1)
          event.target.innerText = count
        }
      }
    >
      Clique aqui!
    </button>
  )
}

export default App
