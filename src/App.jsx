import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import StoryGrid from './components/StoryGrid.jsx'
import Footer from './components/Footer.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className='font-body bg-ivory min-h-screen' >
      <Header />
  
      <main>
        <StoryGrid />
      </main>
      <Footer />
    </div>
    
  )
}

export default App
