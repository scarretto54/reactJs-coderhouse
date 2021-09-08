import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'
import CartWidget from './CartWidget/CartWidget.jsx'

const NavBar =() => {
    return (              
      <nav className="NavBar navbar navbar-dark navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="Nav-logo" >
        <img src={logo} className="logo" alt="logo" />
      </div> 
      <div className="leftNav container">          
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="animate__animated collapse navbar-collapse" id="navbarResponsive">
              <ul id="bgNavMenu" className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item"><a  href="">Vinos</a></li>
              <li className="nav-item"><a  href="">Espumantes</a></li>
              <li className="nav-item"><a  href="">Whiskys</a></li>
              <li className="nav-item"><a  href="">Destilados</a></li>
              <li className="nav-item"><a  href="">Cervezas</a></li>
              <li className="nav-item"><a  href="">Bazar</a></li>
              <li className="nav-item"><a  href="">Contacto</a></li>                
            </ul>
          </div>   
        </div>     
        <div className="rightNav">          
          <button type="button" className="btn btn-lg btn-secondary"><strong>Login</strong></button>
          <button type="button" className="btn btn-outline-light "><strong>Sign-up</strong></button>
          <CartWidget />
        </div>     
        </nav>        
    )
}

export default NavBar;