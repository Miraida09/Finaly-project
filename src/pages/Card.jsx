import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, incQty, decQty, clearCart } from '../redux/cartSlice';
import '../styles/cart.css';

function Card() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart?.items) || [];

  const calculateFinalPrice = (price, discount) => {
    const priceNum = Number(price) || 0;
    const discountNum = Number(discount) || 0;
    return Math.max(priceNum - discountNum, 0);
  };

  const calculateSubtotal = () => {
    if (!Array.isArray(cartItems)) return 0;
    return cartItems.reduce((sum, item) => {
      const finalPrice = calculateFinalPrice(item.price, item.discount);
      return sum + (finalPrice * (Number(item.qty) || 0));
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const total = subtotal;

  const handleCheckout = () => {
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return;
    }
    navigate('/checkout');
  };

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="cart-page container">
        <h1 className="cart-page__title">YOUR CART</h1>
        <div className="cart-page__empty">
          <p className="cart-page__empty-text">Ваша корзина пуста</p>
          <Link to="/" className="cart-page__back-btn">
            Вернуться в магазин
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <div className="cart-page__header">
        <h1 className="cart-page__title">YOUR CART</h1>
        <Link to="/" className="cart-page__return-link">RETURN TO SHOP</Link>
      </div>

      <div className="cart-page__content">
        <div className="cart-page__items">
          {cartItems.map((item) => {
            const finalPrice = calculateFinalPrice(item.price, item.discount);
            const hasDiscount = Number(item.discount) > 0;
            const oldPrice = Number(item.price) || 0;

            return (
              <div key={item.id} className="cart-page__item">
                <img
                  className="cart-page__item-image"
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
                <div className="cart-page__item-info">
                  <h3 className="cart-page__item-title">{item.title}</h3>
                  <div className="cart-page__item-price-wrapper">
                    {hasDiscount && (
                      <span className="cart-page__item-old-price">{oldPrice.toFixed(2)} сом</span>
                    )}
                    <span className="cart-page__item-price">{finalPrice.toFixed(2)} сом</span>
                  </div>
                </div>
                <div className="cart-page__item-controls">
                  <div className="cart-page__qty-controls">
                    <button
                      className="cart-page__qty-btn"
                      onClick={() => dispatch(decQty(item.id))}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="cart-page__qty-value">{item.qty}</span>
                    <button
                      className="cart-page__qty-btn"
                      onClick={() => dispatch(incQty(item.id))}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="cart-page__remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    aria-label="Remove item"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-page__totals">
          <h2 className="cart-page__totals-title">Cart totals</h2>
          <div className="cart-page__totals-row">
            <span className="cart-page__totals-label">SUBTOTAL</span>
            <span className="cart-page__totals-value">{subtotal.toFixed(2)} сом</span>
          </div>
          <div className="cart-page__totals-row cart-page__totals-row--total">
            <span className="cart-page__totals-label">TOTAL</span>
            <span className="cart-page__totals-value">{total.toFixed(2)} сом</span>
          </div>
          <button 
            className="cart-page__checkout-btn"
            onClick={handleCheckout}
            disabled={!Array.isArray(cartItems) || cartItems.length === 0}
          >
            {(!Array.isArray(cartItems) || cartItems.length === 0) 
              ? "Корзина пуста" 
              : "PROCEED TO CHECKOUT"}
          </button>
          {subtotal >= 199 && (
            <p className="cart-page__free-shipping">
              Congratulations! You are eligible for free shipping.
            </p>
          )}
          <button
            className="cart-page__clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            Очистить корзину
          </button>
          <Link to="/" className="cart-page__continue-btn">
            Продолжить покупки
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
