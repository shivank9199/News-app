import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
    <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">Home</Link>
                        <Link className="nav-link active" to="/Business">Business</Link>
                        <Link className="nav-link active" to="/Entertainment">Entertainment</Link>
                        <Link className="nav-link active" to="/General">General</Link>
                        <Link className="nav-link active" to="/Health">Health</Link>
                        <Link className="nav-link active" to="/Science">Science</Link>
                        <Link className="nav-link active" to="/Sports">Sports</Link>
                        <Link className="nav-link active" to="/Technology">Technology</Link>
                    </div>
                </div>
        </div>
    </nav>
    )
  }
}