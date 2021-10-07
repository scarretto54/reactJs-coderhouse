import { useState, useContext, useRef } from 'react'
import './Cart.css'
import 'bootstrap/dist/css/bootstrap.css'
import ItemList from "../ItemList/ItemList"
import Togglable from '../Togglable/Togglable'
import ContactForm from '../ContactForm/ContactForm'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../context/NotificationContext'
import { createOrder } from '../../services/firebase/firebase'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'


const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        phone: '',
        address: '',
        comment: ''
    })
    const { products, clearCart, getTotal } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)
    const contactFormRef = useRef()
    const history = useHistory()

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            items: products,
            total: getTotal(),
            phone: contact.phone,
            address: contact.address,
            comment: contact.comment
        }

        console.log(objOrder)

        createOrder(objOrder).then(msg => {
            setNotification('success', msg)
            history.push('/reactJs-coderhouse/')
        }).catch(error => {
            setNotification('error', error)
        }).finally(() => {
            setProcessingOrder(false)
            clearCart()
            setContact({
                phone: '',
                address: '',
                comment: ''
            })            
        })
    }
    
    return ( 
        <div>
            <h1><strong>Mi Carrito</strong></h1>          
            <Link to='/reactJs-coderhouse/'><button className="btn btn-info"><strong>Quiero ver mas !</strong></button></Link>
            {(!processingOrder && contact.phone !== '' && contact.address !== '' && contact.comment !== '') &&
                <div>
                    <span><strong>Telefono: {contact.phone}   </strong></span>                    
                    <span><strong>Direccion: {contact.address}</strong></span>
                    <p><strong>Comentario: {contact.address}</strong></p>
                    <button onClick={() => setContact({ phone: '', address: '', comment: ''})} className='btn btn-outline-danger' ><strong>Borrar datos de contacto</strong></button>
                </div>    
            }
            {(!processingOrder && products.length) > 0 && <Togglable buttonLabelShow={(contact.phone !== '' && contact.address !== '' && contact.comment !== '') ? 'Editar contacto' : 'Agregar datos de contacto'} ref={contactFormRef}>
                                                            <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                                                          </Togglable> }
            <br/>
            {!processingOrder ? <ItemList products={products} /> : 'Procesando Orden'}
            {(products.length > 0 && !processingOrder) && <h3><strong>Total: ${getTotal()}</strong></h3>}
            {(!processingOrder && products.length > 0) && <button onClick={() => confirmOrder()} className='btn btn-primary'><strong>Confirmar Compra</strong></button>} <br/>
            {(!processingOrder && products.length > 0) && <button onClick={() => clearCart()} className="btn btn-outline-danger"><strong>Cancelar compra</strong></button>}
        </div>
    )
}
export default Cart