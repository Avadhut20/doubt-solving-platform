import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">Hello, Tailwind CSS with React Vite!</h1>
        <p className="mt-2">This is a basic example.</p>
      </div>
    </>
  )
}

export default App
