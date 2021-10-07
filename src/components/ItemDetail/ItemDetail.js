import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import UserContext from '../../context/UserContext'

const ItemDetail = ({ product, productsAdded, addProdFunction }) => {
    const [count, setCount] = useState(0)
    const {user} = useContext(UserContext)

    if(!product) {
        return <h3>{`Ese producto ya no existe`}</h3>
    }  
    
    return (
    <div className="row-md-2 black">
    <div className="row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div className="col-auto d-none d-lg-block">
        <img width="300" height="400" src={product.img} alt={product.name} className="card-img-top" />
    </div>
      <div className="col p-4 d-flex flex-column position-static">
    <h5 className='card-title' Style='color: black; display:block; '>
        <strong>
            {product.name}
        </strong>
    </h5>
    <h5 className="card-text" Style='color: black; display:block; '>
        <strong>
            {`Stock: ${product.stock} `} 
        </strong>            
    </h5>
    <h6 className="card-text" Style='color: black; display:block; '>
        <strong>
            {`Precio: ${product.price} `}
        </strong>
    </h6>
    <h6 className="card-text" Style='color: black; display:block; '>
        <strong>
            {`Categoria: ${product.catname} `}
        </strong>
    </h6>
    <h6 className="card-text" Style='color: black; display:block; '>
        <strong>
            {product.description}
        </strong>    
    </h6>
    <div className="row p-4">
    {
            count === 0 && user
            ? <ItemCount  Style='aling: center' product={product} productsAdded={productsAdded} addProdFunction={addProdFunction} setCount={setCount} />
            : user 
            ? <Link to='/reactJs-coderhouse/cart'><button className="btn btn-light"><strong>Ir al carrito</strong></button></Link>
            : <Link to='/login'><button className="btn btn-light"><strong>Login</strong></button></Link>
    }
    </div>
    </div>
    </div>
    </div>

    )
}
export default ItemDetail

