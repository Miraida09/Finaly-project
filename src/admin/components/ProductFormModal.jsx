import React, { useState, useEffect } from 'react';
import '../styles/modal.css';
import '../styles/form.css';

const ProductFormModal = ({ isOpen, onClose, onSubmit, product, categories }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    category: '',
    price: '',
    discount: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || '',
        image: product.image || '',
        category: product.category || '',
        price: product.price || '',
        discount: product.discount || '',
      });
    } else {
      setFormData({
        title: '',
        image: '',
        category: '',
        price: '',
        discount: '',
      });
    }
    setErrors({});
  }, [product, isOpen]);

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
    if (!formData.title.trim()) {
      newErrors.title = 'Название обязательно';
    }
    if (!formData.image.trim()) {
      newErrors.image = 'Ссылка на изображение обязательна';
    }
    if (!formData.category.trim()) {
      newErrors.category = 'Категория обязательна';
    }
    if (!formData.price.trim()) {
      newErrors.price = 'Цена обязательна';
    }
    if (!formData.discount.trim()) {
      newErrors.discount = 'Скидка обязательна';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Convert price and discount to strings
      const productData = {
        ...formData,
        price: String(formData.price),
        discount: String(formData.discount),
      };
      onSubmit(productData);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-header">{product ? 'Редактировать товар' : 'Создать товар'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label required">Название</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`form-input ${errors.title ? 'error' : ''}`}
            />
            {errors.title && <p className="form-error">{errors.title}</p>}
          </div>

          <div className="form-group">
            <label className="form-label required">Ссылка на изображение</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className={`form-input ${errors.image ? 'error' : ''}`}
            />
            {errors.image && <p className="form-error">{errors.image}</p>}
          </div>

          <div className="form-group">
            <label className="form-label required">Категория</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              list="categories"
              className={`form-input ${errors.category ? 'error' : ''}`}
            />
            <datalist id="categories">
              {categories.map((cat) => (
                <option key={cat} value={cat} />
              ))}
            </datalist>
            {errors.category && <p className="form-error">{errors.category}</p>}
          </div>

          <div className="form-group">
            <label className="form-label required">Цена</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
              min="0"
              className={`form-input ${errors.price ? 'error' : ''}`}
            />
            {errors.price && <p className="form-error">{errors.price}</p>}
          </div>

          <div className="form-group">
            <label className="form-label required">Скидка</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              step="0.01"
              min="0"
              className={`form-input ${errors.discount ? 'error' : ''}`}
            />
            {errors.discount && <p className="form-error">{errors.discount}</p>}
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Отмена
            </button>
            <button type="submit" className="btn btn-primary">
              {product ? 'Сохранить' : 'Создать'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormModal;

