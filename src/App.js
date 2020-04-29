import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'

import './App.css';

import Footer from './components/footer';

import logo from './images/logo.png'
import Slidingmain from './components/slidingmain'



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Rajesh Love',
            headerLinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' }
            ],
            home: {

            },
            about: {
                title: 'Be Relentless',
               
                text: 'wCheckout my rajesh belowCheckout my rajesh belowCheckout my rajesh belowCheckout my rajesh below'
            },
            contact: {
                title: 'Contact'
            },
            services: {
                title: 'Services'
            },
            galleries: {
                title: 'Galleries'
            },
        }
    }
    render() {
        return (
            <div className="fullcontainer site-bg">
                <Router>
                    {/*header Menu Bar*/}
                    <div className="tata">
                        <Navbar bg="transparent" expand="lg">
                            <Navbar.Brand>
                                <div>
                                    <img src={logo} alt="logo" width="200" />
                                
                                </div>
                            </Navbar.Brand>

                            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                            <Navbar.Collapse id="navbar-toggle">
                                <Nav className="ml-auto">
                                    <Link className="nav-link" to="/">Home</Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="abc">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <Link className="nav-link" to="/about">About</Link>
                                    <Link className="nav-link" to="/services">Services</Link>
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                    <Link className="nav-link" to="/galleries">Galleries</Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    {/*Slider Bar*/}
                    <Slidingmain className="abc" />
                    <div style={{ paddingTop: 50 }} className="abc">

                        <Footer />
                    </div>

                </Router >
            </div>
        );
    }
}

export default App;
