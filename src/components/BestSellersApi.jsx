import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { IoBag } from 'react-icons/io5';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toggleWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
import '../styles/bestSellers.css';

const API_URL = 'https://69771b935b9c0aed1e855f27.mockapi.io/list';

const BestSellersApi = () => {
  const dispatch = useDispatch();
  const wishlistIds = useSelector((state) => state.wishlist.ids);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(API_URL);
        // Get first 8 products
        const first8Products = response.data.slice(0, 8);
        setProducts(first8Products);
      } catch (err) {
        setError('Не удалось загрузить товары. Пожалуйста, попробуйте позже.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const calculateFinalPrice = (price, discount) => {
    const priceNum = Number(price) || 0;
    const discountNum = Number(discount) || 0;
    return Math.max(priceNum - discountNum, 0);
  };

  const handleWishlistToggle = (productId) => {
    dispatch(toggleWishlist(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  if (loading) {
    return (
      <section className="bestsellers-api container">
        <div className="bestsellers-api__header">
          <h1 className="bestsellers-api__title">OUR BEST SELLERS</h1>
        </div>
        <div className="bestsellers-api__loading">
          <p>Загрузка товаров...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bestsellers-api container">
        <div className="bestsellers-api__header">
          <h1 className="bestsellers-api__title">OUR BEST SELLERS</h1>
        </div>
        <div className="bestsellers-api__error">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bestsellers-api container">
      <div className="bestsellers-api__header">
        <h1 className="bestsellers-api__title">OUR BEST SELLERS</h1>
        <p className="bestsellers-api__subtitle">
          Select a category or go to the section with a convenient filter by product
        </p>
      </div>
      <div className="bestsellers-api__grid">
        {products.map((product) => {
          const finalPrice = calculateFinalPrice(product.price, product.discount);
          const hasDiscount = Number(product.discount) > 0;
          const oldPrice = Number(product.price) || 0;

          const isInWishlist = wishlistIds.includes(product.id);
          const isAddedToCart = addedToCart === product.id;

          return (
            <div key={product.id} className="bestsellers-api__card">
              <div className="bestsellers-api__image-wrapper">
                <img
                  className="bestsellers-api__image"
                  src={product.image}
                  alt={product.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300';
                  }}
                />
                <button
                  className="bestsellers-api__wishlist-btn"
                  onClick={() => handleWishlistToggle(product.id)}
                  aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {isInWishlist ? (
                    <FaHeart className="bestsellers-api__wishlist-icon filled" />
                  ) : (
                    <FaRegHeart className="bestsellers-api__wishlist-icon" />
                  )}
                </button>
              </div>
              <div className="bestsellers-api__card-info">
                <div className="bestsellers-api__card-text">
                  <h3 className="bestsellers-api__card-title">{product.title}</h3>
                  <div className="bestsellers-api__price-wrapper">
                    {hasDiscount && (
                      <p className="bestsellers-api__old-price">{oldPrice.toFixed(2)} сом</p>
                    )}
                    <p className="bestsellers-api__card-price">{finalPrice.toFixed(2)} сом</p>
                  </div>
                </div>
                <button
                  className={`bestsellers-api__cart-btn ${isAddedToCart ? 'added' : ''}`}
                  onClick={() => handleAddToCart(product)}
                  aria-label="Add to cart"
                >
                  
                      <IoBag className="bestsellers-api__cart-icon-svg" />
                      <span className="bestsellers-api__cart-text">Добавить в корзину</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BestSellersApi;

