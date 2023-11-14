import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

const router = createBrowserRouter (
  [
    {
      path: '/',
      element: <App />
      error: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          index: true,
          element: <ContactPage />
        },
        {
          index: true,
          element: <AboutPage />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
