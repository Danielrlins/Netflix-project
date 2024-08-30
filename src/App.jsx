
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [busca,setBusca] = useState('')
  const [rate,setRate] = useState([])
  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows') 
    .then(response => setData(response.data))
 }, [])

 

 const lowerBusca = busca.toLowerCase();

 const personagensFiltrados = data
 .filter((personagem) => personagem.name.toLowerCase().includes(lowerBusca) )

  return (
    <div>
      <header> 
        <div className='logo-menu'>
          <img src="NetflixLogoSvg.png" alt="" />
          <nav className='menu'>
              <span className="menus">Início</span>
              <span className="menus">Séries</span>
              <span className="menus">Filmes</span>
              <span className="menus">Bombando</span>
              <span className="menus">Minha lista</span>
              <span className="menus">Navegar por idiomas</span>
          </nav>
        </div>
        <div className='div-busca'><input placeholder='Buscar Série' type="text" onChange={(e) => setBusca(e.target.value)}/></div>
      </header>
      <div>
      </div>
      <div className='cards'>
        {personagensFiltrados.map((data) => (       
          <div key={data.id} className='card' >
            <p className='Name-filme'>{data.name}</p>
            <img className='img-filme' src={data.image.medium} alt="" />
            <p className='rating'><span className='star'>&#9733;</span>{data.rating.average}</p>
          </div>
        ))}
      </div>
    </div>
  
  )
}

export default App
