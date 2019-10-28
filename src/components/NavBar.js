import React from 'react';
import { Link } from "@reach/router";
import "../style/NavBar.css";
import logo from '../media/logo.png';


function NavBar ({navLinks}) {
    return (
        <header className='navigationDiv'>
            <figure className="image-logo" onClick={ () => { './' } }>
                <img className='image' src={ logo } height="40px" width="40px" alt="toolbar-logo" />
                <h1 className='title'>Star Gazing!</h1>
            </figure>
            {/* <h1 className='title'>Star Gazing!</h1>  */}
            <nav
                className="responsive-toolbar"
                >
                <ul
                    // className={ navOpen ? 'active' : '' }
                    className='links'
                >
                        { navLinks.map((link, index) => 
                            <li
                                key={ index }
                            >
                                <div className="navLinks">
                                <Link
                                    to={link.path}
                                    style={{ textDecoration: 'none' , color: 'black' }}
                                >    { link.icon } { link.text }
                                </Link>
                                </div>
                            </li>
                        )}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar 