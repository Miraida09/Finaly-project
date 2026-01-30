import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  addProduct,
  editProduct,
  removeProduct,
  clearError,
} from '../store/productsSlice';
import ProductTable from '../components/ProductTable';
import ProductFormModal from '../components/ProductFormModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import '../styles/admin.css';
import '../styles/form.css';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error, categories } = useSelector((state) => state.products);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCreate = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleDelete = (product) => {
    setDeletingProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleFormSubmit = async (productData) => {
    try {
      if (editingProduct) {
        await dispatch(editProduct({ id: editingProduct.id, product: productData })).unwrap();
      } else {
        await dispatch(addProduct(productData)).unwrap();
      }
      setIsFormOpen(false);
      setEditingProduct(null);
      // Refresh products list
      dispatch(fetchProducts());
    } catch (err) {
      console.error('Error saving product:', err);
    }
  };

  const handleDeleteConfirm = async () => {
    if (deletingProduct) {
      try {
        await dispatch(removeProduct(deletingProduct.id)).unwrap();
        setIsDeleteModalOpen(false);
        setDeletingProduct(null);
        // Refresh products list
        dispatch(fetchProducts());
      } catch (err) {
        console.error('Error deleting product:', err);
      }
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingProduct(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingProduct(null);
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        {/* Header */}
        <div className="admin-header">
          <h1>Управление товарами</h1>
          <p>Управляйте каталогом товаров</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="admin-error">
            <span>{error}</span>
            <button onClick={() => dispatch(clearError())}>×</button>
          </div>
        )}

        {/* Controls */}
        <div className="admin-controls">
          <button onClick={handleCreate} className="btn-create">
            + Создать товар
          </button>
        </div>

        {/* Products Table */}
        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
          loading={loading}
        />

        {/* Product Form Modal */}
        <ProductFormModal
          isOpen={isFormOpen}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
          product={editingProduct}
          categories={categories}
        />

        {/* Delete Confirmation Modal */}
        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          product={deletingProduct}
          onConfirm={handleDeleteConfirm}
          onCancel={handleCloseDeleteModal}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
