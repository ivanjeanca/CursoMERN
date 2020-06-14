import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Aplicación de Notas
                    </Link>
                    <div className="navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Notas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">
                                    Nueva nota
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user">
                                    Usuarios
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
