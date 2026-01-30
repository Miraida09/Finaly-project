import React from 'react';
import '../styles/table.css';

const ProductTable = ({ products, onEdit, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="table-loading">
        <div>Загрузка товаров...</div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="table-empty">
        <div>Товары не найдены</div>
      </div>
    );
  }

  return (
    <div className="products-table-container">
      <table className="products-table">
        <thead>
          <tr>
            <th>Изображение</th>
            <th>Название</th>
            <th>Категория</th>
            <th>Цена</th>
            <th>Скидка</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/64';
                  }}
                />
              </td>
              <td>
                <div className="product-title">{product.title}</div>
              </td>
              <td>
                <span className="product-category">{product.category}</span>
              </td>
              <td>
                <div className="product-price">{product.price} сом</div>
              </td>
              <td>
                <div className="product-discount">{product.discount} сом</div>
              </td>
              <td>
                <div className="product-actions">
                  <button onClick={() => onEdit(product)} className="edit-btn">
                    Редактировать
                  </button>
                  <span className="product-actions-separator">|</span>
                  <button onClick={() => onDelete(product)} className="delete-btn">
                    Удалить
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
