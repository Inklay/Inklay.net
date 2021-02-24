import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="content">
            <div className="banner">
                <img src="../../HomeBanner.png"/>
                <h1>Home page</h1>
            </div>
            <p className="texts">
                <div className="title">
                    Description:
                </div>
                This website lists all my current projects with all the information needed like an FAQ or download link.
                <div className="title">
                    Latest news:
                </div>
                20 february 2021: Website creation
                <div className="title">
                    Current projects:
                </div>
                I currently am working on these projects:
                <ul>
                    <li><Link to="/SyncHelper">ATS & ETS2 SyncHelper</Link></li>
                    <li><Link to="/Pokemon-TCG">Pokémon TCG</Link></li>
                </ul>
                <div className="title">
                    Discontinued projects:
                </div>
                These projetcs are discontinued and won't be updated but you can still download them.
                <ul>
                    <li><a href="https://github.com/Inklay/LEGACY-Discord-Pokedex">Legacy Discord Pokédex</a></li>
                </ul>
            </p>
        </div>
    )
}

export default Home