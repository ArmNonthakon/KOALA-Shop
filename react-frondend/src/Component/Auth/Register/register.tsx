import {  useState } from 'react';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { regisApi } from '../../../service/userService';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const callRegisterApi = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        if (password === confirmPassword) {
            try {
                const responseStatus = await regisApi({ username, email, password });
                console.log(responseStatus)
                if (responseStatus === 202) {
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    setError('');
                    navigate('/login');
                } else {
                    setError('Registration failed. Please try again.');
                }
            } catch (error) {
                setError('Registration failed. Please try again.');
            }
        } else {
            setError('Passwords do not match.');
        }
    };

    return (
        <div className='register'>
            <h1>Sign up</h1>
            <form onSubmit={callRegisterApi}>
                <div>
                    <img src="/user.svg" alt="User icon" />
                    <input
                        type="text"
                        placeholder='Username'
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <img src="/at.svg" alt="Email icon" />
                    <input
                        type="email"
                        placeholder='Email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <img src="/lock.svg" alt="Lock icon" />
                    <input
                        type="password"
                        placeholder='Password'
                        id='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <img src="/lock.svg" alt="Lock icon" />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        id='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className='error'>{error && error}</div>
                <div className='register-button'>
                    <button type='submit' >
                        Sign up
                    </button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;
