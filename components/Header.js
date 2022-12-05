/**
 * Created by roman on 05.09.17.
 */
import React, {Component} from 'react';
import video from './../media/cover_video.mp4';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="video-container">
                    <video async autoPlay loop src={video} type="video/mp4"></video>
                </div>
                <nav className="top-menu">
                    <div className="menu-container">
                        <div className="logo-container">
                            <div className="logo">
                            </div>
                            <div className="logo-description">
                                <p>Zuan Toding Datu</p>
                                <p>Student</p>
                            </div>
                        </div>
                        <div className="navbar">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                AboutMe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
                        </div>
                    </div>
                    
                </nav>
                <div className="jumbotron">
                    <p>Hello world!</p>
                    <p>And welcome to my Reactjs CV, learn more about me and my skills</p>
                </div>
            </header>
        )
    }
}