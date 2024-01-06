import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/assets/vite.svg'

import Nav from './components/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div>
        <h1 className="text-center text-3xl font-bold underline">
        Hello world!
        </h1>
        <button className="btn flex justify-center">Button</button>
      </div>
    </>
  )
}

export default App
