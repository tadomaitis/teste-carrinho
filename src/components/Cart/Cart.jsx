import CartProduct from '../CartProduct/CartProduct'
import './Cart.css'
import { currencyFormatter } from '../../helpers/currency'

const Cart = ({ carrinho, total }) => {
  return (
    <div className='carrinho'>
      <div className='titulo-carrinho'>
        <h1>Meu carrinho</h1>
      </div>
      <div className='conteudo-carrinho'>
        <ul className='lista-de-produtos'>
          {carrinho.map(itemCarrinho => (
            <li key={itemCarrinho.uniqueId} className='item-carrinho'>
              <CartProduct product={itemCarrinho} />
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
