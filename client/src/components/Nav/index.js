import React from "react";
// import { Link } from 'react-router-dom';
import "../../index.css";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li >
                            Test
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Nav;