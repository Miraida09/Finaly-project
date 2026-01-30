import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { removeWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
import '../styles/wishlist.css';

const API_URL = 'https://69771b935b9c0aed1e855f27.mockapi.io/list';

function Like() {
  const dispatch = useDispatch();
  const wishlistIds = useSelector((state) => state.wishlist.ids);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (err) {
        setError('Не удалось загрузить товары. Пожалуйста, попробуйте позже.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const wishlistProducts = products.filter(product => wishlistIds.includes(product.id));

  const calculateFinalPrice = (price, discount) => {
    const priceNum = Number(price) || 0;
    const discountNum = Number(discount) || 0;
    return Math.max(priceNum - discountNum, 0);
  };

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeWishlist(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return (
      <div className="wishlist-page container">
        <h1 className="wishlist-page__title">Избранное</h1>
        <div className="wishlist-page__loading">
          <p>Загрузка...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="wishlist-page container">
        <h1 className="wishlist-page__title">Избранное</h1>
        <div className="wishlist-page__error">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page container">
      <h1 className="wishlist-page__title">Избранное</h1>

      {wishlistProducts.length === 0 ? (
        <div className="wishlist-page__empty">
          <p className="wishlist-page__empty-text">В избранном пока пусто</p>
          <Link to="/" className="wishlist-page__back-btn">
            Вернуться в магазин
          </Link>
        </div>
      ) : (
        <>
          <div className="wishlist-page__grid">
            {wishlistProducts.map((product) => {
              const finalPrice = calculateFinalPrice(product.price, product.discount);
              const hasDiscount = Number(product.discount) > 0;
              const oldPrice = Number(product.price) || 0;

              return (
                <div key={product.id} className="wishlist-page__card">
                  <img
                    className="wishlist-page__image"
                    src={product.image}
                    alt={product.title}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300';
                    }}
                  />
                  <div className="wishlist-page__card-info">
                    <h3 className="wishlist-page__card-title">{product.title}</h3>
                    <div className="wishlist-page__price-wrapper">
                      {hasDiscount && (
                        <p className="wishlist-page__old-price">{oldPrice.toFixed(2)} сом</p>
                      )}
                      <p className="wishlist-page__card-price">{finalPrice.toFixed(2)} сом</p>
                    </div>
                    <div className="wishlist-page__card-actions">
                      <button
                        className="wishlist-page__remove-btn"
                        onClick={() => handleRemoveFromWishlist(product.id)}
                      >
                        Удалить
                      </button>
                      <button
                        className="wishlist-page__cart-btn"
                        onClick={() => handleAddToCart(product)}
                      >
                        Добавить в корзину
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="wishlist-page__footer">
            <Link to="/" className="wishlist-page__back-btn">
              Вернуться в магазин
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Like;
