import {useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NotificationContext from '../../context/NotificationContext.js'

const ItemCount = ({product, productsAdded, addProdFunction})=> {
   const [quantity,setQuantity] = useState(0)
   const { setNotification } = useContext(NotificationContext)

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
       const newProduct = {
           ...product,
           quantity: quantity
       } 
       addProdFunction([...productsAdded, newProduct])
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
                       <td align="right" colSpan="5"><button className='btn btn-secondary' onClick={()=>onAddtoCart()}>Agregar al carrito</button></td>
                   </tr>
               </tbody>
           </table>       
       </div>
   )

}
export default ItemCount