import './App.css' 
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import { Route, Routes} from "react-router-dom"

    

function App () {
    return (
        <>
         <HomePage />
        <div className = "portfolio-app">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AboutPage" element ={<AboutPage />} />
                <Route path="/ContactPage" element ={<ContactPage />} />
                <Route path="/PortfolioPage" element ={<PortfolioPage />} />
                <Route path="/ResumePage" element ={<ResumePage />} />
            </Routes>
    </div>
    </>
);
}

export default App
