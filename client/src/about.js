import React from 'react';
import { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/carousel";
import  Navbar  from "./components/navigationbar"


import './about.css';
import ten from './assets/10.jpg';
import eleven from './assets/connor.jpg';
import twelve from './assets/js.jpg';
import  Tnavbar from "./components/transnav"


export default class about extends Component {
    render() {
        return (
 <div>          
  <Tnavbar />
 

  <header class="masthead text-white text-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 ml-auto mr-auto  toplogo">
          <h1 class="">The Kable Academy @<br/>The University of Cincinnati <br/>1891 Innovation Hub</h1>
          <h2 class="littlelogo">"Where Next Happens"</h2>
        </div>
      </div>
    </div>
  </header>

 
  <section class="features-icons topcolor text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <h3 class="headers" >The Kable Academy </h3>
            <p class="lead mb-0">Accelerated Technical Training in Web Development and Internet Security.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            {/* <div class="features-icons-icon d-flex">
              <i class="icon-layers m-auto text-primary"></i>
            </div> */}
            <h3 class="headers" >1819 Innovation Center </h3>
            <p class="lead mb-0">The University of Cincinnati's Cornverstone Technology Incubator. Where Next Happens. </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            {/* <div class="features-icons-icon d-flex">
              <i class="icon-check m-auto text-primary"></i>
            </div> */}
            <h3 class="headers" >The Technology Gap</h3>
            <p class="lead mb-0">both working together to Produce quality technology workers in order to fill Ohio's technology gap!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

 
  <section class="showcase">
    <div class="container-fluid p-0">
      <div class="row no-gutters">

        <div class="col-lg-6 order-lg-2 text-white showcase-img imga"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Web Development Bootcamp:</h2>
          <p class="lead mb-0">12 week 600hr immersive Accelerated Development Program with core studies in: HTML, CSS, Javascript, Git, Github, ReactJS, NodeJS, Express, MongoDB, and Axios.</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img imgb"></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>Cincinnati Travel Capstone Project:</h2>
          <p class="lead mb-0">This site was created focusing on the MERN stack. It incorporates MongoDB - Express - ReactJS - NodeJS, and is fully responsive and optimized for mobile devices. The user is able to write and display entries from MongoDB. Contact submissions are entered into a seperate MongoDB. </p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img imgc" ></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Cincinnati's Technology Corridor:</h2>
          <p class="lead mb-0">With the opening of the 1819 Innovation Hub, Cincinnati entered the national dialogue in Technology. The Cincinnati Technology Corridor is being hailed as a new capitol of Tech in the Midwest. As Students we were extremely lucky to recieve our education in this amazing and exciting environment. </p>
        </div>
      </div>
    </div>
  </section>


  <section class="testimonials text-center bg-light">
    <div class="container">
      <h2 class="mb-5">The Students Behind This Project...</h2>
      <div class="row">
        <div class="col-lg-6">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="cj img-fluid rounded-circle mb-3" src={eleven} alt=""/>
            <h5>Connor Twele</h5>
            <p class=" mb-0">"My dad can build anything he can think of with two hands and some tools. I can build websites with two hands and Visual Studios Code, Google, and StackOverflow"</p>
          </div>
        </div>
        <div class="col-lg-6 us">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0  ">
            <img class="cj img-fluid rounded-circle mb-3" src={twelve} alt=""/>
            <h5>Jamie Schifrin</h5>
            <p class=" mb-0">"Starting a second chapter in life as a Web Developer."</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="call-to-action text-white text-center">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h2 class="mb-4"></h2>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}
}
