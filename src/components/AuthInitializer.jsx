import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeAuth } from '../redux/authSlice';

const AuthInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = initializeAuth(dispatch);
    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default AuthInitializer;

