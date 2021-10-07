import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../context/NotificationContext'
import { getCategories } from '../../services/firebase/firebase'
import logo from './logo.png'

const NavBar = () => {
  const [categories, setCategories] = useState()
  const { user, logout } = useContext(UserContext)
  const { getQuantity } = useContext(CartContext)
  const { setNotification } = useContext(NotificationContext)

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    }).catch((error) => {
      console.log(error)
    })
    return () => {
      setCategories()
    }
  }, [])

  const handleLogout = () => {
    logout()
    setNotification('error', `Hasta luego ${user}`)
  }


  return (
    <nav className="NavBar navbar navbar-dark navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="Nav-logo" >
        <Link to={'/reactJs-coderhouse/'}>
        <img src={logo} className="logo" alt="logo"/>
        </Link>
      </div>
      <div className="leftNav container">          
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="animate__animated collapse navbar-collapse" id="navbarResponsive">
                    <ul id="bgNavMenu" className="navbar-nav ml-auto my-2 my-lg-0">                      
                    {categories?.map(category => <li className="nav-item"><NavLink key={category.id} to={`/reactJs-coderhouse/category/${category.id}`}>{category.description}</NavLink></li>)}     
                    </ul>
          </div>  
          
        </div>        
      <div className="rightNav"> 
      {user          
          ? <button className="btn btn-lg btn-light" onClick={handleLogout} ><strong>Logout</strong></button>
          : <Link to='/login'><button type="button" className="btn btn-lg btn-secondary"><strong>Login</strong></button></Link>
           // <button type="button" className="btn btn-outline-light "><strong>Sign-up</strong></button>
        }
          {
        (user && getQuantity() > 0) &&
        <Link to='/reactJs-coderhouse/cart'>
          <CartWidget />
        </Link>
        }
      </div>
    </nav>
  )
} 
export default NavBar
