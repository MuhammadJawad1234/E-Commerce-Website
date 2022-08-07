import React from 'react'
import currencyFormatter from "currency-formatter";
import { useSelector, useDispatch } from 'react-redux'
import { BsDash, BsPlus, BsFillBackspaceReverseFill } from "react-icons/bs";

const Cart = () => {
  const { products, totalQuantity, totalPrice } = useSelector(state => state.CartReducer);
  const dispatch = useDispatch();
  return (
    <div className='cart'>
      <div className='container'>
        <h3>Your Cart</h3>
        {products.length > 0 ? <>
          <div className='row'>
            <div className='col-9'>
              <div className='cart__heading'>
                <div className='row'>
                  <div className='col-2'>pictuer</div>
                  <div className='col-2'>name</div>
                  <div className='col-2'>price</div>
                  <div className='col-2'>inc/dec</div>
                  <div className='col-2'>total price</div>
                  <div className='col-2'>remove</div>
                </div>
              </div>
              {products.map(product => (
                <div className='row varticalAlign' key={product.id}>
                  <div className='col-2'>
                    <div className='cart__img'>
                      <img src={`/images/${product.image}`} alt='' />
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='cart__name'>
                      {product.name}
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='cart__price'>
                      {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='details__info'>
                      <div className="flex">
                        <span className='dec' onClick={() => dispatch({ type: "DEC", payload: product.id })}> <BsDash /> </span>
                        <span className='quantity'>{product.quantity}</span>
                        <span className='inc' onClick={() => dispatch({ type: "INC", payload: product.id })}> <BsPlus /> </span>
                      </div>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='cart__total text__align'>
                      {currencyFormatter.format(product.discountPrice * product.quantity, { code: 'USD' })}
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='cart__remove' onClick={() => dispatch({ type: "REMOVE", payload: product.id })}>
                      <BsFillBackspaceReverseFill />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='col-3'>
              <div className='summary'>
                <div className='summary__heading'>
                  summary
                </div>
                <div className='summary__details'>
                  <div className='row mb-10'>
                    <div className='col-6'>
                      Total Items:
                    </div>
                    <div className='col-6'>
                      {totalQuantity}
                    </div>
                  </div>
                  <div className='row mb-10'>
                    <div className='col-6'>
                      Total Price:
                    </div>
                    <div className='col-6'>
                      {currencyFormatter.format(totalPrice, { code: 'USD' })}
                    </div>
                  </div>
                  <button type='button' className='CO-btn'> Check Out </button>
                </div>
              </div>
            </div>
          </div>
        </> : "Your Cart Is Empty"}
      </div>
    </div>
  )
}

export default Cart