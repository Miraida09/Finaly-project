import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, register, clearError } from '../redux/authSlice';
import '../styles/auth.css';

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear form errors when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
    // Clear Redux error when user types
    if (error) {
      dispatch(clearError());
    }
  };

  const validateLogin = () => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email неверного формата';
    }
    if (!formData.password) {
      errors.password = 'Пароль обязателен';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateRegister = () => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email неверного формата';
    }
    if (!formData.password) {
      errors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      errors.password = 'Пароль должен быть минимум 6 символов';
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Подтвердите пароль';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Пароли не совпадают';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    try {
      await dispatch(login({ email: formData.email, password: formData.password })).unwrap();
      navigate('/account');
    } catch (err) {
      // Error is handled by Redux
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateRegister()) return;

    try {
      await dispatch(register({ email: formData.email, password: formData.password })).unwrap();
      navigate('/account');
    } catch (err) {
      // Error is handled by Redux
    }
  };

  const getErrorMessage = () => {
    if (error) {
      if (error.includes('user-not-found') || error.includes('wrong-password')) {
        return 'Неверный email или пароль';
      }
      if (error.includes('email-already-in-use')) {
        return 'Этот email уже используется';
      }
      if (error.includes('weak-password')) {
        return 'Пароль слишком слабый';
      }
      if (error.includes('invalid-email')) {
        return 'Неверный формат email';
      }
      return 'Произошла ошибка. Попробуйте еще раз.';
    }
    return null;
  };

  return (
    <div className="auth-page container">
      <div className="auth-page__card">
        <div className="auth-page__tabs">
          <button
            className={`auth-page__tab ${activeTab === 'login' ? 'auth-page__tab--active' : ''}`}
            onClick={() => {
              setActiveTab('login');
              setFormErrors({});
              dispatch(clearError());
            }}
          >
            Вход
          </button>
          <button
            className={`auth-page__tab ${activeTab === 'register' ? 'auth-page__tab--active' : ''}`}
            onClick={() => {
              setActiveTab('register');
              setFormErrors({});
              dispatch(clearError());
            }}
          >
            Регистрация
          </button>
        </div>

        <div className="auth-page__content">
          {activeTab === 'login' ? (
            <form onSubmit={handleLogin} className="auth-page__form">
              <div className="auth-page__form-group">
                <label htmlFor="login-email" className="auth-page__label">
                  Email
                </label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`auth-page__input ${formErrors.email ? 'auth-page__input--error' : ''}`}
                  placeholder="example@email.com"
                />
                {formErrors.email && (
                  <span className="auth-page__field-error">{formErrors.email}</span>
                )}
              </div>

              <div className="auth-page__form-group">
                <label htmlFor="login-password" className="auth-page__label">
                  Пароль
                </label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`auth-page__input ${formErrors.password ? 'auth-page__input--error' : ''}`}
                  placeholder="Введите пароль"
                />
                {formErrors.password && (
                  <span className="auth-page__field-error">{formErrors.password}</span>
                )}
              </div>

              {getErrorMessage() && (
                <div className="auth-page__error">{getErrorMessage()}</div>
              )}

              <button
                type="submit"
                className="auth-page__submit-btn"
                disabled={loading}
              >
                {loading ? 'Загрузка...' : 'Войти'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="auth-page__form">
              <div className="auth-page__form-group">
                <label htmlFor="register-email" className="auth-page__label">
                  Email
                </label>
                <input
                  type="email"
                  id="register-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`auth-page__input ${formErrors.email ? 'auth-page__input--error' : ''}`}
                  placeholder="example@email.com"
                />
                {formErrors.email && (
                  <span className="auth-page__field-error">{formErrors.email}</span>
                )}
              </div>

              <div className="auth-page__form-group">
                <label htmlFor="register-password" className="auth-page__label">
                  Пароль
                </label>
                <input
                  type="password"
                  id="register-password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`auth-page__input ${formErrors.password ? 'auth-page__input--error' : ''}`}
                  placeholder="Минимум 6 символов"
                />
                {formErrors.password && (
                  <span className="auth-page__field-error">{formErrors.password}</span>
                )}
              </div>

              <div className="auth-page__form-group">
                <label htmlFor="register-confirm-password" className="auth-page__label">
                  Подтвердите пароль
                </label>
                <input
                  type="password"
                  id="register-confirm-password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`auth-page__input ${formErrors.confirmPassword ? 'auth-page__input--error' : ''}`}
                  placeholder="Повторите пароль"
                />
                {formErrors.confirmPassword && (
                  <span className="auth-page__field-error">{formErrors.confirmPassword}</span>
                )}
              </div>

              {getErrorMessage() && (
                <div className="auth-page__error">{getErrorMessage()}</div>
              )}

              <button
                type="submit"
                className="auth-page__submit-btn"
                disabled={loading}
              >
                {loading ? 'Загрузка...' : 'Зарегистрироваться'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;

