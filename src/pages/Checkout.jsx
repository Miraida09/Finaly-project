import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/checkout.css';

const WHATSAPP_PHONE = "996557119412";

function Checkout() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart?.items) || [];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculateFinalPrice = (price, discount) => {
    const priceNum = Number(price) || 0;
    const discountNum = Number(discount) || 0;
    return Math.max(priceNum - discountNum, 0);
  };

  const calculateTotal = () => {
    if (!Array.isArray(cartItems)) return 0;
    return cartItems.reduce((sum, item) => {
      const finalPrice = calculateFinalPrice(item.price, item.discount);
      return sum + (finalPrice * (Number(item.qty) || 0));
    }, 0);
  };

  const cleanPhone = (phone) => {
    return phone.replace(/[^\d+]/g, '');
  };

  const validatePhone = (phone) => {
    const cleaned = cleanPhone(phone);
    const digitsOnly = cleaned.replace(/\+/g, '');
    return digitsOnly.length >= 9;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Имя и фамилия обязательны';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Телефон должен содержать минимум 9 цифр';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Адрес доставки обязателен';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      navigate('/card');
      return;
    }

    let message = "🛒 Заказ с сайта\n\n";
    message += "Клиент:\n";
    message += `Имя: ${formData.name}\n`;
    message += `Телефон: ${formData.phone}\n`;
    message += `Адрес: ${formData.address}\n`;
    message += `Комментарий: ${formData.comment.trim() || '-'}\n\n`;
    message += "Товары:\n";

    cartItems.forEach((item, index) => {
      const finalPrice = calculateFinalPrice(item.price, item.discount);
      const qty = Number(item.qty) || 1;
      const lineTotal = finalPrice * qty;
      message += `${index + 1}) ${item.title} x${qty} — ${lineTotal.toFixed(2)} AUD\n`;
    });

    const total = calculateTotal();
    message += `\nИтого: ${total.toFixed(2)} AUD`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsSubmitted(true);
  };

  // Redirect if cart is empty
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="checkout-page container">
        <h1 className="checkout-page__title">Оформление заказа</h1>
        <div className="checkout-page__empty">
          <p>Ваша корзина пуста</p>
          <Link to="/card" className="checkout-page__back-btn">
            Назад в корзину
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page container">
      <h1 className="checkout-page__title">Оформление заказа</h1>

      {isSubmitted && (
        <div className="checkout-page__success">
          <p>WhatsApp открыт. Проверьте сообщение и отправьте.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="checkout-page__form">
        <div className="checkout-page__form-group">
          <label htmlFor="name" className="checkout-page__label">
            Имя и фамилия <span className="checkout-page__required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`checkout-page__input ${errors.name ? 'checkout-page__input--error' : ''}`}
            placeholder="Введите имя и фамилию"
          />
          {errors.name && (
            <span className="checkout-page__error">{errors.name}</span>
          )}
        </div>

        <div className="checkout-page__form-group">
          <label htmlFor="phone" className="checkout-page__label">
            Телефон <span className="checkout-page__required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`checkout-page__input ${errors.phone ? 'checkout-page__input--error' : ''}`}
            placeholder="+996 557 119 412"
          />
          {errors.phone && (
            <span className="checkout-page__error">{errors.phone}</span>
          )}
        </div>

        <div className="checkout-page__form-group">
          <label htmlFor="address" className="checkout-page__label">
            Адрес доставки <span className="checkout-page__required">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`checkout-page__input ${errors.address ? 'checkout-page__input--error' : ''}`}
            placeholder="Введите адрес доставки"
          />
          {errors.address && (
            <span className="checkout-page__error">{errors.address}</span>
          )}
        </div>

        <div className="checkout-page__form-group">
          <label htmlFor="comment" className="checkout-page__label">
            Комментарий к заказу
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="checkout-page__textarea"
            placeholder="Дополнительная информация к заказу (необязательно)"
            rows="4"
          />
        </div>

        <div className="checkout-page__actions">
          <Link to="/card" className="checkout-page__back-link">
            Назад в корзину
          </Link>
          <button type="submit" className="checkout-page__submit-btn">
            Отправить в WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;

