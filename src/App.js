import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import Notification from './components/Notification/Notification'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { NotificationContextProvider } from './context/NotificationContext'
import { useContext } from 'react'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { CartContextProvider } from './context/CartContext'
import UserContext from './context/UserContext'
import Footer from './components/Footer/Footer'



const App = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="App">
      <NotificationContextProvider>   
      <CartContextProvider>   
        <BrowserRouter>  
        <header className="App-header sticky-top py-3"> 
          <NavBar />             
        </header>                  
          <main className="App-main">        
          <Notification />
            <Switch>
              
              <Route exact path='/reactJs-coderhouse/'>
              
                <ItemListContainer />                
              </Route>
              <Route path='/reactJs-coderhouse/category/:categoryid'>              
                <ItemListContainer />
              </Route>
              <Route path='/reactJs-coderhouse/item/:itemid'>             
                <ItemDetailContainer />                
              </Route>
              <PrivateRoute path='/reactJs-coderhouse/cart' user={user}>              
                <Cart />                
              </PrivateRoute>
              <Route path='/login'>
                  <Login/>
              </Route>
            </Switch>  
            </main>                      
            <Footer/>                               
        </BrowserRouter> 
        </CartContextProvider>       
      </NotificationContextProvider>
    </div>
  )
}

export default App