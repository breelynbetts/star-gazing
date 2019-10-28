import React from 'react';
import { Link } from "@reach/router";
import "../style/NavBar.css";

function NavBar ({navLinks, logo }) {
    return (
        <div>
            <nav
                className="responsive-toolbar"
                >
                <ul
                    className={ navOpen ? 'active' : '' }
                >
                    <figure className="image-logo" onClick={ () => { './' } }>
                        <img src={ logo } height="40px" width="40px" alt="toolbar-logo" />
                    </figure>
                    { navLinks.map((link, index) => 
                        <li
                            key={ index }
                        >
                            <Link
                                to={link.path}
                                style={{ textDecoration: 'none' , color: 'black', paddingLeft:'10px' }}
                            >    { link.icon } { link.text }
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar 