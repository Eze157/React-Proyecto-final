import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartwidget';
import './index.css';


const Navbar = () => {

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'><span className='Color'>Cas</span>Val</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/categoria/pastas'>Pastas</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/categoria/salsas'>Salsas</Link>
            </li> 
            <li className="nav-item">
            <a className="nav-link" to='cart'><CartWidget /></a>
            </li>
            </ul>
            </div>
            </div>
        </nav>
        </>
    )

}

export default Navbar;