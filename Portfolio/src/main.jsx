import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*import { createBrowserRouter, RouterProvider } from 'react-router-dom';*/
import { BrowserRouter } from 'react-router-dom';
/*import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";



const router = createBrowserRouter (
  [
    {
      path: '/',
      element: <App />,
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
        },
        {
          index: true,
          element: <PortfolioPage />
        },
        {
          index: true,
          element: <ResumePage />
        }
      ]
    }
  ]
)*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
