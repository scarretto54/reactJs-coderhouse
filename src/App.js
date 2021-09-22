import { useState, useEffect } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import Notification from './components/Notification/Notification'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import { getCategories } from './products'
import { NotificationContextProvider } from './context/NotificationContext'
import { UserContext } from './context/UserContext'


const App = () => {
  const [cartProducts, setCartProduct] = useState([])
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      setUser('Santiago')
    }, 200)
  }, [])

  return (
    <div className="App">
      <NotificationContextProvider>      
        <BrowserRouter>  
        <header className="App-header  sticky-top py-1">      
          <UserContext.Provider value={user}>
            <NavBar categories={getCategories()} cartProducts={cartProducts}/> 
          </UserContext.Provider> 
        </header>
          <Notification />          
          <main className="App-main">
            <Switch>
            <Route exact path='/'>
                <ItemListContainer />
              </Route>
              <Route path='/category/:categoryid'>
                <ItemListContainer />
              </Route>
              <Route path='/item/:itemid'>
                <ItemDetailContainer productsAdded={cartProducts} addProdFunction={setCartProduct}/>
              </Route>
              <Route path='/cart'>
                <Cart productsAdded={cartProducts} addProdFunction={setCartProduct}/>
              </Route>
            </Switch>  
            </main>
            <footer className="App-footer">
            </footer>            
        </BrowserRouter>        
      </NotificationContextProvider>
    </div>
  )
}

export default App