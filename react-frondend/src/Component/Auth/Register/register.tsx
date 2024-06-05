import './register.scss'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <>  <div className='register'>
            <h1>Sign up</h1>
            <form action="">
                <div>
                    <img src="/user.svg" alt="" />
                    <input type="text" placeholder='Username' id="" />
                </div>
                <div>
                    <img src="/at.svg" alt="" />
                    <input type="text" placeholder='Email' id='' />
                </div>
                <div>
                    <img src="/lock.svg" alt="" />
                    <input type="text" placeholder='Password' id='' />
                </div>
                <div>
                    <img src="/lock.svg" alt="" />
                    <input type="text" placeholder='Confirm Password' id='' />
                </div>
                <div className='register-button'>
                    <button>Sign Up</button>
                    <p>Already have account? <Link to="/login">Login</Link></p>
                </div>

            </form>
        </div>

        </>
    )
}
export default Register