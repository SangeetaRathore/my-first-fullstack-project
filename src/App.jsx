import { useState } from 'react'
import './App.css'
import heroImage from './assets/hero.png'
import Search from './component/search'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <>
     <main>
      <div className="pattern" />


      <div className="wrapper">
        <header >

          <img src={heroImage} alt="Hero Banner" />
          <h1>Find <span className="text-gradient" >Movies</span> You'll Enjoy without the Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
     </main>
    </>
  )
}

export default App
