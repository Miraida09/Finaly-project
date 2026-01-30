import { RouterProvider } from 'react-router-dom'
import './App.css'
import myRouter from './router'
import AuthInitializer from './components/AuthInitializer'

function App() {
  return (
    <>
      <AuthInitializer />
      <RouterProvider router={myRouter} />
    </>

  )
}

export default App
