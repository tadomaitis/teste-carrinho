import { useState, useEffect } from 'react'
import Product from './components/Product'
import './App.css'
import { currencyFormatter } from './helpers/currency'

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
      <div className='carrinho'>
        <div className='titulo-carrinho'>
          <h1>Meu carrinho</h1>
        </div>
        <div className='conteudo-carrinho'>
          <ul className='lista-de-produtos'>
            {produtos.map(produto => (
              <li key={produto.uniqueId} className='item-carrinho'>
                <Product product={produto} />
              </li>
            ))}
          </ul>
        </div>
        <div className="total-carrinho-container">
          <div className='total-carrinho'>
            <p>Total</p>
            <p>{currencyFormatter.format(total/100)}</p>
          </div>
          {total > 1000 && (
            <div className="frete-gratis">
              <p>Parabéns, sua compra tem frete grátis !</p>
            </div>
          )}
        </div>
        <div className='finalizar-compra'>
          <button className='btn-finalizar-compra'>Finalizar compra</button>
        </div>
      </div>
    </div>
  )
}

export default App
