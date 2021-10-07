import { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'
import UserContext from '../../context/UserContext'
import NotificationContext from '../../context/NotificationContext'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault()

        const objUser = {
            username,
            password
        }

        login(objUser)
        setNotification('success', `Bienvenido ${objUser.username}`)
        history.push('/reactJs-coderhouse/')
    }

    return (
        <div className='form-signin'>
          <h3><strong>Log In</strong></h3>
          <form onSubmit={handleLogin} className='LoginForm'>
            <label className='LabelLogin'>
                Usuario
              <input
                className='form-control'
                type='text'
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </label>
            <label className='LabelLogin'>
                Contraseña
              <input
                className="form-control"
                type='password'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </label>
            <br/>
            <button type='submit' className='w-100 btn btn-lg btn-primary'><strong>Login</strong></button>
          </form>
        </div>
      )
}

export default Login