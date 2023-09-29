import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import {logout} from '../redux/auth/authSlice';
import '../styles/Header.css';
import { AppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';
   

const Header: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const handleLogout = () => {
        dispatch(logout()); // Dispatch logout action
        navigate('/login'); // Navigate to login page
      }
    

    return (
        <header className="header-container">
            <Link to="/" className="gomoku-header">GOMOKU</Link>
            
            <div className="header-actions">
                {!isAuthenticated && <Link to="/login" className="header-link">Login</Link>}
                {!isAuthenticated && <Link to="/games" className="header-link">Previous Games</Link>}
                {!isAuthenticated && <Link to="/signup" className="header-link">Sign Up</Link>}
                {isAuthenticated && <Link to="/login" className="header-link">Login</Link>}
                {isAuthenticated && <Link to="/games" className="header-link">Previous Games</Link>}
                {isAuthenticated && <Link to="/signup" className="header-link">Sign Up</Link>}
            <div className="logout-button">
                {isAuthenticated && <button onClick={handleLogout} className="header-link">Logout</button>}  {/* Logout button */}
            </div>
            </div>
        </header>
    );
}

export default Header;
