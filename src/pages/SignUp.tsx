import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/auth/authSlice';  // Import the signUp action
import Header from '../components/Header';
import '../styles/SignUp.css';
import { AppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // For displaying error messages
    const dispatch: AppDispatch = useDispatch<AppDispatch>();  // Explicitly type dispatch
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === confirmPassword) {
            dispatch(signUp({ username, password }))
            .then(() => {
                navigate('/'); // Navigate only if signUp is successful
            })
            .catch((error) => {
                setErrorMessage(error.message); // Handle signUp error
            });
        } else {
            setErrorMessage('Passwords do not match'); // Set error message
        }
    };

    return (
        <div>
            <Header />
            <main className="signup-wrapper">
                <form className="login-main" onSubmit={handleSubmit}>
                    <div className="signup-form">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="signup-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="signup-form">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className="signup-button">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default SignUp;
