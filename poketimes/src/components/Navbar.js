import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
    // console.log(props)
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink to="/" className="brand-logo"> Poke'Times </NavLink>
                <ul className="right nav-links">
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);