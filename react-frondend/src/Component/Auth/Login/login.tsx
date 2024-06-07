import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { LoginApi } from '../../../service/userService';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const [loading ,setLoading] = useState('');

    const callLoginApi = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResponse('');
        setLoading('Logging in...')
        try {
            const response = await LoginApi({ username, password });
            if (response === 202) {
                setUsername('');
                setPassword('');
                setResponse('Login success!!')
                setTimeout(() => {
                    navigate('/');
                }, 3500);
            } else {
                setResponse('Login failed. Please check your username and password.');
            }
        } catch (error) {
            setResponse('Login failed. Please check your username and password.');
        }finally{
            setLoading('')
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
                <div className='error' style={{color : response == "Login success!!" ? "green" : "red" } }>{response && response}</div>
                <div className='login-button'>
                    <button type='submit' style={{backgroundColor: loading && "rgb(147, 196, 239)" }}>
                        {loading ? loading : "Login"}
                    </button>
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
