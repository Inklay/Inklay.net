import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="navBar" role="navigation">
                    <li className="navItem">
                        <Link className="navLink" to="/"><b>Home</b></Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink" to="/SyncHelper"><b>SyncHelper</b></Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink" to="/Pokemon-TCG"><b>Pokémon TCG</b></Link>
                    </li>
                    <li className="navItem">
                        <a className="navLink" href="https://github.com/Inklay"><b>GitHub</b></a>
                    </li>
                </ul>
            </nav>
            <br/>
            <br/>
        </header>
    )
}

export default Header