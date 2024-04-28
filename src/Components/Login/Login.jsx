import './Login.css'
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login Storage</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p><a href='#'>No tienes una cuenta, Registrate Aqui</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login
