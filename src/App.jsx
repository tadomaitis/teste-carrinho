import { useState, useEffect } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'

const App = () => {
  const [produtos, setProdutos] = useState([])
  const [total, setTotal] = useState([])

  const api_url = 'https://tadomaitis.github.io/data/acima-10-reais.json'

  useEffect(() => {
    fetch(api_url)
      .then(response => response.json())
      .then(data => {
        setProdutos(data.items)
        setTotal(data.value)
      })
  }, [])

  return (
    <div className='App'>
      <Cart total={total} produtos={produtos} />
    </div>
  )
}

export default App
