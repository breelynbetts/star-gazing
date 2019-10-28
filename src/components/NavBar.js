import React, { useState } from 'react';
import { Link } from "@reach/router";
import "../style/NavBar.css";

function NavBar ({ background, linkColor, navLinks, logo }) {
    const [ navOpen, setNavOpen ] = useState(0)
    return (
        <div>
            <nav
                className="responsive-toolbar"
                // style={{ background: background }}
                >
                <ul
                    // style={{ background: background }}
                    className={ navOpen ? 'active' : '' }
                >
                    <figure className="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                        <img src={ logo } height="40px" width="40px" alt="toolbar-logo" />
                    </figure>
                    { navLinks.map((link, index) => 
                        <li
                            key={ index }
                        >
                            <Link
                                to={link.path}
                                // style={{ color: linkColor }}
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