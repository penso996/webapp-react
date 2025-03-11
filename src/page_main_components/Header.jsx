// Header.jsx

// Import functions from React
import { NavLink } from 'react-router-dom';

export default function Header() {

    // RENDER
    return (
        <header>
            <NavLink to="/">
                <h1>MOVIE BLOOG</h1>
            </NavLink>
        </header>
    );
}