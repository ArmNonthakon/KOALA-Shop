import './login.scss'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>  <div className='login'>
            <h1>Login</h1>
            <form action="">
                <div>
                    <img src="/user.svg" alt="" />
                    <input type="text" placeholder='Username' id="" />
                </div>
                <div>
                    <img src="/lock.svg" alt="" />
                    <input type="text" placeholder='Password' id='' />
                </div>
                <div className='login-button'>
                    <button>Login</button>
                    <p>Don't have account? <Link to="/signup">Sign up</Link></p>
                </div>

            </form>
        </div>

        </>
    )
}
export default Login