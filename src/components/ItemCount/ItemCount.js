import {useState, 
    useContext,
    useEffect
} from 'react'
import NotificationContext from '../../context/NotificationContext'
import CartContext from '../../context/CartContext'
import 'bootstrap/dist/css/bootstrap.css';

const ItemCount = ({product, setCount})=> {
    const [quantity, setQuantity] = useState(0)
    const { setNotification } = useContext(NotificationContext)
    const { addItem, isInCart, getProduct } = useContext(CartContext)

    useEffect(() => {
        if(isInCart(product.id)) {
           const oldQuantity = getProduct(product.id)?.quantity
           setQuantity(oldQuantity)
        }
        return(() => {
            setQuantity(0)
        })
    }, [product, getProduct, isInCart])

    const onAdd = () => {
        if(quantity < product.stock) {
            setQuantity(quantity+1)
        }
    } 

    const onRemove = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }     
    }

    const onAddtoCart = () =>{
        addItem(product, quantity)
        setCount(quantity) 
        setNotification('success', `${product.name} ha sido agregado al carrito`)
    }


   
   return(
       <div >          
           <table >
               <tbody>
                   <tr class="btn-group" role="group">
                       <td align="left"><button className="btn btn-outline-secondary" onClick={()=> onRemove() }><strong>-</strong></button></td>
                       <td align="center"><button className="btn btn-outline" Style={{fontSize : '20px'}} ><strong>{quantity}</strong></button></td>
                       <td align="right"><button className="btn btn-outline-secondary" onClick={() => onAdd() }><strong>+</strong></button></td>
                       
                   </tr> 
                   <br/>
                   <br/>                  
                   <tr>                   
                       <td align="right" colSpan="5"><button className='btn btn-secondary' onClick={()=>onAddtoCart()}><strong>Agregar al carrito</strong></button></td>
                   </tr>
               </tbody>
           </table>       
       </div>
   )

}
export default ItemCount