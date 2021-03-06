import { useState, useContext, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ItemList from "../ItemList/ItemList"
import Togglable from '../Togglable/Togglable'
import ContactForm from '../ContactForm/ContactForm'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../context/NotificationContext'
import { createOrder } from '../../services/firebase/firebase'
import { Link } from 'react-router-dom'

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        phone: '',
        address: '',
        email: '',
        emailCheck: '',
        comment: ''
    })
    const { products, clearCart, getTotal } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)
    const contactFormRef = useRef()
    

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            items: products,
            total: getTotal(),
            phone: contact.phone,
            address: contact.address,
            email: contact.email,
            comment: contact.comment
        }

            createOrder(objOrder).then(msg => {
            setProcessingOrder(false) 
            setNotification('success', msg)                     
        }).catch(error => {
            setNotification('error', error)
        }).finally(() => {            
            clearCart()
            setContact({
                phone: '',
                address: '',
                email: '',
                emailCheck: '',
                comment: ''
            })            
        })
    }
    
    return ( 
        <div className="cart container">            
            <h2><strong>Mi Carrito</strong></h2>   
            <hr/>           
            {(!processingOrder && contact.phone !== '' && contact.address !== ''  && contact.email !== '' && contact.comment !== '') &&
                <div>
                    <span><strong>Telefono: {contact.phone}   </strong></span>                    
                    <span><strong>Direccion: {contact.address}   </strong></span>
                    <span><strong>E-mail: {contact.email}   </strong></span>
                    <p><strong>Comentario: {contact.comment}    </strong></p>
                    <button onClick={() => setContact({ phone: '', address: '', email: '', comment: ''})} className='btn btn-outline-danger' ><strong>Borrar datos de contacto</strong></button>
                </div>   
            }
            {(!processingOrder && products.length) > 0 && <Togglable buttonLabelShow={(contact.phone !== '' && contact.address !== '' && contact.email !== '' && contact.comment !== '') ? 'Editar contacto' : 'Agregar datos de contacto'} ref={contactFormRef}>
                                                            <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                                                          </Togglable> }
            <br/>
            {!processingOrder ? <ItemList products={products} /> : 'Procesando Orden'}   
            <br/>         
            {(products.length > 0 && !processingOrder) && <span><strong>Total: ${getTotal()} </strong></span>}  
             {(!processingOrder && products.length > 0) && <button onClick={() => clearCart()} className="btn btn-outline-danger"><strong>Cancelar compra</strong></button>}
            <hr/>            
            <Link to='/reactJs-coderhouse/'><button className="btn btn-info"><strong>Quiero ver mas !</strong></button></Link>   {(!processingOrder && products.length > 0) && <button onClick={(contact.phone !== '' && contact.address !== '' && contact.email !== '' && contact.comment !== '') ? () => confirmOrder() : () => setNotification('success', 'Cargar datos de contacto') } className='btn btn-primary'><strong>Confirmar Compra</strong></button>} 
       
        </div>
    )
}
export default Cart