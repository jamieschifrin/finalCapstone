import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Dropdown, dropdown, NavDropdown  } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import './navigationbar.css';


export default class NavigationBar extends Component {
    render() {
        return (
            <div>
               
               <nav class="navbar navbar-expand-lg navbar-light fixed-top test3">
                 <Navbar expand="lg" bg="" variant='light'>
                    <a class="navbar-brand test3 text-white" href="#">Cincinnati Lifestyle</a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id=" mr-auto ">
                        <Nav className="ml-auto ">                                                   
                        <Nav.Item >
                            <Nav.Link>
                            <Link className="text-white" to="/">Home</Link>
                            </Nav.Link>
                        </Nav.Item >
                        <NavDropdown title={ <span className="text-white">Attractions</span>} id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/viewattractions">View Attraction</NavDropdown.Item>
                                <NavDropdown.Item href="/addattractions">Add Attractions</NavDropdown.Item>
                            </NavDropdown>
                        <Nav.Item>
                            <Nav.Link>
                            <Link className="text-white" to="/about">About</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                            <Link className="text-white" to="/contact">Contact</Link>
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </nav>
             
            </div>
        )
    }
}



