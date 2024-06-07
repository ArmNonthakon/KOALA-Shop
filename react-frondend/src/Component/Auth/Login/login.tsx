import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { LoginApi } from '../../../service/userService';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const callLoginApi = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        try {
            const response = await LoginApi({ username, password });
            if (response === 202) {
                setUsername('');
                setPassword('');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setError('Login failed. Please check your username and password.');
            }
        } catch (error) {
            setError('Login failed. Please check your username and password.');
        }
    };

    return (
        <div className='login'>
            <h1>Login</h1>
            <form onSubmit={callLoginApi}>
                <div>
                    <img src="/user.svg" alt="User Icon" />
                    <input
                        type="text"
                        placeholder='Username'
                        id="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <img src="/lock.svg" alt="Lock Icon" />
                    <input
                        type="password"
                        placeholder='Password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>               
                <div className='error'>{error && error}</div>
                <div className='login-button'>
                    <button type='submit' >
                        Loign
                    </button>
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
