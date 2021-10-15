import CartProduct from './CartProduct'
import { currencyFormatter } from '../helpers/currency'

const Cart = ({ produtos, total }) => {
  return (
    <div className='carrinho'>
      <div className='titulo-carrinho'>
        <h1>Meu carrinho</h1>
      </div>
      <div className='conteudo-carrinho'>
        <ul className='lista-de-produtos'>
          {produtos.map(produto => (
            <li key={produto.uniqueId} className='item-carrinho'>
              <CartProduct product={produto} />
            </li>
          ))}
        </ul>
      </div>
      <div className='total-carrinho-container'>
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
  )
}

export default Cart
