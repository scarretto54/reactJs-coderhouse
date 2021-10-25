import { useState, useContext } from 'react'
import './ContactForm.css'
import 'bootstrap/dist/css/bootstrap.css';
import NotificationContext from '../../context/NotificationContext'


const ContactForm = ({ toggleVisibility, setContact }) => {
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')
    const [email, setEmail] = useState('')
    const [emailCheck, setEmailCheck] = useState('')
    const { setNotification } = useContext(NotificationContext)
    

    const handleContactForm = (e) => {
            
        e.preventDefault()

        if(email !== emailCheck){
          setNotification('success', 'Los E-mail no son iguales.')
        }
        else {

        toggleVisibility.current.toggleVisibility()

        
        const objContact = {
            phone,
            address,
            email,
            emailCheck,
            comment
        }
        setContact(objContact)
        setPhone('')
        setAddress('')
        setEmail('')
        setEmailCheck('')
        setComment('')
      }
    }

    return (
        <div className='ContactContainer'>
          <div><strong>Contacto</strong></div>
          <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>Telefono:
              <input
                className='form-control'
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
                required
              />
            </label>
            <label className='LabelContact'>E-mail:
              <input
                className='form-control'
                type='text'
                value={email}
                onChange={({ target }) => setEmail(target.value)}                                
                required
              />
            </label>
                        <label className='LabelContact'> Confirmar E-mail:
              <input
                className='form-control'
                type='text'
                value={emailCheck}                
                onChange={({ target }) => setEmailCheck(target.value)}                
                required/>
            </label>
            <label className='LabelContact'>Direccion:
              <input
                className='form-control'
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
                required
              />
            </label>
            <label className='LabelContact'>Comentario:
              <input
                className='form-control'
                type='text'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
                required
              />
            </label>
            <br/>
            <button className='btn btn-primary' type='submit'><strong>Confirmar</strong></button>
          </form>
          <br/>
        </div>
      )
}

export default ContactForm