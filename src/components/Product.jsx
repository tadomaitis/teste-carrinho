import { currencyFormatter } from '../helpers/currency'

const Product = ({ product }) => {
  return (
    <>
      <div className='imagem-produto-wrapper'>
        <img src={product.imageUrl} alt={product.name} className='imagem-produto' />
      </div>
      <div className='dados-produto'>
        <h3 className='nome-produto'>{product.name}</h3>
        <p className='preço-listado'>{currencyFormatter.format(product.listPrice/100)}</p>
        <p className='preço-cobrado'>{currencyFormatter.format(product.sellingPrice/100)}</p>
      </div>
    </>
  )
}

export default Product
