import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Dropdown, dropdown, NavDropdown  } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
import './transnav.css';


export default class TransNavigationBar extends Component {

componentDidMount() {

$(document).ready(function() {

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 610) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("test1");
        $(".navbar-brand").removeClass("test");
        $(".navbar-brand").addClass("text-white");

    } else {
      $(".navbar").removeClass("test1");
      $(".navbar-brand").removeClass("text-white");
      $(".navbar-brand").addClass("test");
    }
}); //missing );
  
});
}
    render() {
        return (
<div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <Navbar expand="lg" bg="" variant='light'>
    <a class="navbar-brand test" href="#">Cincinnati Lifestyle</a>
    {/* <Navbar.Brand className="text" href="/">Cincinnati Lifestyle</Navbar.Brand> */}
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



