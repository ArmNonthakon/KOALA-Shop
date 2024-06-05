import Navbar from '../Navbar/navbar'
import { useEffect } from 'react'
import './auth.scss'
import Login from './Login/login'
import Register from './Register/register'
interface Auth {
    state: string
}
const Auth = ({ state }: Auth) => {

    useEffect(() => {

    }, [])
    return (
        <>
            <Navbar />
            <div className='section-auth'>
                <div className='auth-picture'>
                    <img src="/koalaLogo.png" alt="" width="200px" />
                    <h1>Welcome to Koala shop </h1>
                    <p>Please Login account to continue shopping.</p>

                </div>
                <div className="auth-login-regis">
                    <div id='auth-login' className='auth-login' style={{ display: state == 'login' ? 'inline' : 'none' }}>
                        <Login />

                    </div>
                    <div id='auth-regis' className='auth-regis' style={{ display: state == 'register' ? 'inline' : 'none' }}>
                        <Register />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Auth