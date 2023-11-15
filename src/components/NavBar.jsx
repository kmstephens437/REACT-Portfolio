import  '../styles/NavBar.css';

function NavBar () {
    return (
    <nav className ="nav">
        <a href = "/" className = "ks">Kevin Stephens</a>
        <ul>
            <li>
                <a href = "/AboutPage">About Me</a>
            </li>
            <li>
                <a href= "/PortfolioPage">Portfolio</a>
            </li>
            <li>
                <a href= "/ContactPage">Contact</a>
            </li>
            <li>
                <a href= "/ResumePage">Resume</a>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar;
