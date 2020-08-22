import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">

            <Link className="nav-brand" to="/"><h3>CRUD</h3></Link>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/posts">Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/liked">Liked</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/disliked">Disliked</Link>
                    </li>
                </ul>
            </div>
        </nav>

        // <nav classNameName="navbar navbar-expand-md bg-dark navbar-dark  justify-content-between fixed-top">
        //     <div>
        //         <h2 classNameName="navbar-brand">Title</h2>
        //     </div>
        //     <ul classNameName="navbar-nav">
        //         <li classNameName="navbar-item"><Link to="/">Home</Link></li>
        //         <li classNameName="navbar-item"><Link to="/posts">Posts</Link></li>
        //         <li classNameName="navbar-item"><Link to="/liked">liked</Link></li>
        //         <li classNameName="navbar-item"><Link to="/disliked">Disliked</Link></li>

        //     </ul>
        // </nav>


    );
}

export default Navbar;
