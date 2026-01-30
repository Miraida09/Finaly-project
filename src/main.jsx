import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import './styles/tokens.css'
import './styles/utilities.css'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import myStore from './redux/store.js';

// Initialize theme before render to prevent flash
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>

  </StrictMode>,
)
