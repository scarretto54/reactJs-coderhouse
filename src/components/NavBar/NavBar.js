import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import CartWidget from '../CartWidget/CartWidget'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import './NavBar.css'

const NavBar = ({ categories, cartProducts }) => {
  const [productQuantity, setProductQuantity] = useState(0)
  const user = useContext(UserContext)

  useEffect(() => {
    if(cartProducts.length === 0) {
      setProductQuantity(0)
    } else {
      cartProducts.forEach(prod => {
        setProductQuantity(productQuantity + prod.quantity)
    })
    }
  }, [cartProducts]) 

  return (
    <nav className="NavBar navbar navbar-dark navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="Nav-logo" >
        <Link to={'/reactJs-coderhouse/'}>
        <img src={logo} className="logo" alt="logo"/>
        </Link>
      </div>
      <div className="leftNav container">          
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          {user &&
           <div className="animate__animated collapse navbar-collapse" id="navbarResponsive">
                    <ul id="bgNavMenu" className="navbar-nav ml-auto my-2 my-lg-0">                      
                        {categories.map(category => <li className="nav-item"><NavLink key={category.id} to={`/reactJs-coderhouse/category/${category.id}`}>{category.description}</NavLink></li>)}     
                    </ul>
          </div>  
          } 
        </div>        
      <div className="rightNav">          
          <button type="button" className="btn btn-lg btn-secondary"><strong>Login</strong></button>
          <button type="button" className="btn btn-outline-light "><strong>Sign-up</strong></button>
        <Link to='/reactJs-coderhouse/cart'>
          <CartWidget quantity={productQuantity} />
        </Link>
      </div>
    </nav>
  )
}
export default NavBar
