import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css';
import NavBarData from '../Components/NavBarData'

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState();

    const onClickHeader = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <div className={`aside ${openMenu ? 'aside open' : '' }`}>
                <div className="logo">
                    <Link className={`N__Link ${openMenu ? 'N__Link' : '' }`} onClick={onClickHeader} to="/home"><span>Port</span>Folio</Link>
                </div>
                <div className={`nav-toggler ${openMenu ? 'nav-toggler open' : '' }`} onClick={onClickHeader}>
                    <span></span>
                </div>
                <ul className="nav">
                    <li>
                        {
                        NavBarData.map(({ name, icon, path }, index) => {
                            return (
                            <li key={index}>
                                <NavLink to={path} className={`N__Link ${openMenu ? 'N__Link' : '' }`} onClick={onClickHeader} aria-current="page" > {icon} {name}</NavLink>
                            </li>
                            )
                        })
                    }
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;
