import './Cart.css'
import ItemList from "../ItemList/ItemList"
import 'bootstrap/dist/css/bootstrap.css';

const Cart = ({ productsAdded, addProdFunction }) => {
    return <div>
        <h1><strong>Mi Carrito</strong></h1>
        <button onClick={() => addProdFunction([])} className="btn btn-outline-danger"><strong>Cancelar Pedido</strong></button>
        <br/>
        <br/>
        <ItemList products={productsAdded} />

    </div>
}
export default Cart