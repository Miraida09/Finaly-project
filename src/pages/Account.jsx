import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import '../styles/account.css';

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate('/');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (!user) {
    return null; // ProtectedRoute will handle redirect
  }

  return (
    <div className="account-page container">
      <div className="account-page__card">
        <h1 className="account-page__title">Мой аккаунт</h1>
        
        <div className="account-page__content">
          <div className="account-page__info">
            <div className="account-page__info-item">
              <span className="account-page__label">Email:</span>
              <span className="account-page__value">{user.email}</span>
            </div>
          </div>

          <button 
            className="account-page__logout-btn"
            onClick={handleLogout}
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;

