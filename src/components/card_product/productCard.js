import React, { useContext } from 'react'
import './productCard.css'
import CartContext from '../../context/Cart.provider'

function ProductCard(props) {
  const { addCarrinho } = useContext(CartContext)

  const showPrice = (number) => {
    let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

    return (
      <>
        <h6 className="font-price">{priceConverted}</h6>
      </>
    )

  }
    return(
        <div class="col-3">
                <div class="cont">
                    <div class="product-card">
                        <div class="product-card__image">
                            <img src={props.img}/>
                        </div>
                        <div class="product-card__info">
                            <h2 class="product-card__title">{props.modelo}</h2>
                            <p class="product-card__description">{props.marca}</p>
                            <div class="product-card__price-row">
                                <span class="product-card__price">R$ {showPrice(props.preco)}</span>
                                <button  onClick={() => addCarrinho(props.product)} class="product-card__btn">Adicionar ao Carrinho</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard;