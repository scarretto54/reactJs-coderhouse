import { useState } from 'react'
import './ContactForm.css'
import 'bootstrap/dist/css/bootstrap.css';

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            phone,
            address,
            comment
        }
        setContact(objContact)
        setPhone('')
        setAddress('')
        setComment('')
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
              />
            </label>
            <label className='LabelContact'>Direccion:
              <input
                className='form-control'
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'>Comentario:
              <input
                className='form-control'
                type='text'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
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