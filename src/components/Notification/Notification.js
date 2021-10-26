import React, { useContext } from 'react'
import NotificationContext from '../../context/NotificationContext'
import 'bootstrap/dist/css/bootstrap.css'

const Notification = () => {
  const { notification }  = useContext(NotificationContext)

  if(notification.message === '') {
    return null
  }
    return (

            <div className="alert alert-secondary" Role="alert"
            Style={{ color: notification.severity === 'error' ? 'red' : 'grey'}} >
              {notification.message}
            </div>

  )
}

export default Notification