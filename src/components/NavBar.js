import React, { useState } from 'react';
import { Link } from "@reach/router";

function NavBar ({ background, hoverBackground, linkColor, navLinks, logo }) {
    const [ navOpen, setNavOpen ] = useState(0)
    // const [ hoverIndex, setHoverIndex ] = useState(-1)
    return (
        <navDiv>
            <nav
                className="responsive-toolbar"
                style={{ background: background }}>
                <ul
                    style={{ background: background }}
                    className={ navOpen ? 'active' : '' }
                >
                    <figure className="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                        <img src={ logo } height="40px" width="40px" alt="toolbar-logo" />
                    </figure>
                    { navLinks.map((link, index) => 
                        <li
                            key={ index }
                            // onMouseEnter={ () => { setHoverIndex(index) } }
                            // onMouseLeave={ () => { setHoverIndex(-1) } }
                        // style={{ background: hoverIndex === index ? (hoverBackground || '#999') : '' }}
                        >
                            <Link
                                to={link.path}
                                style={{ color: linkColor }}
                            >    { link.icon } { link.text }
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </navDiv>
    )
}

export default NavBar 