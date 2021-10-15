import { useState, useEffect } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'

const App = () => {
  const [carrinho1, setCarrinho1] = useState([])
  const [totalCarrinho1, setTotalCarrinho1] = useState([])
  const [carrinho2, setCarrinho2] = useState([])
  const [totalCarrinho2, setTotalCarrinho2] = useState([])
  const [carrinho1Selecionado, setCarrinho1Selecionado] = useState(true)

  const api_url = 'https://tadomaitis.github.io/data/acima-10-reais.json'
  const api_url2 = 'https://tadomaitis.github.io/data/abaixo-10-reais.json'

  useEffect(() => {
    fetch(api_url)
      .then(response => response.json())
      .then(data => {
        setCarrinho1(data.items)
        setTotalCarrinho1(data.value)
      })
    fetch(api_url2)
    .then(response => response.json())
    .then(data => {
      setCarrinho2(data.items)
      setTotalCarrinho2(data.value)
    })
  }, [])

  const handleClick = () => {
    setCarrinho1Selecionado(!carrinho1Selecionado)
  }

  return (
    <div className='App'>
      <ul className="carrinhos">
        <li className="seleciona-carrinho">
          <button onClick={handleClick}>Carrinho 1</button>
        </li>
        <li className="seleciona-carrinho">
          <button onClick={handleClick}>Carrinho 2</button>
        </li>
      </ul>
      {carrinho1Selecionado ? (
        <Cart
          carrinho={carrinho1}
          total={totalCarrinho1}
        />
      ) : (
        <Cart
          carrinho={carrinho2}
          total={totalCarrinho2}
        />
      )}
    </div>
  )
}

export default App
