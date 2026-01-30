import React from 'react';
import '../styles/modal.css';
import '../styles/form.css';

const DeleteConfirmModal = ({ isOpen, product, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-header">Удалить товар?</h2>
        <div className="modal-body">
          <p>
            Вы уверены, что хотите удалить этот товар? Это действие нельзя отменить.
          </p>
        </div>
        <div className="modal-footer">
          <button onClick={onCancel} className="btn btn-secondary">
            Отмена
          </button>
          <button onClick={onConfirm} className="btn btn-danger">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
