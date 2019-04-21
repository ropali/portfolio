import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="navbar navbar-inverse navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    
                    <Link className="navbar-brand" to="/">Ropali Munshi</Link>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                       
                        <li> <Link to="/about">About</Link> </li>
                        
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
