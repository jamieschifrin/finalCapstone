import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from 'styled-components';
// import { Jumbotron as Jumbo, Container, Footer, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './footer.css';



const Styles = styled.div`
  

`;

const FooterPage = () => {
  return (
    


    

  
  <footer class="page-footer text-center color pt-4  ">

    
    <div class="container-fluid">
      <div class="row">

        
        <div class="col-md-4 text-center">
          <h5 class="text-uppercase font-weight-bold names">Capstone Project</h5>
          <p>This Website was created as the Capstone Project for the Summer 2020 Session of the Kable Academy's Web Development Bootcamp. This site was developed by Jamie Schifrin and Connor Twele. It demonstrates the MERN stack and is a fully Responsive site.</p>
        </div>
        


        <div class="col-md-4 mx-auto text-center list">
          <h5 class="text-uppercase font-weight-bold names">Connor Twele</h5>
          <ul class="list-unstyled text-center">
            <li><a target="_blank" href="https://github.com/connortwele">Github</a></li>
            <li><a target="_blank" href="https://connortwele.github.io/portfolio/">Porfolio</a></li>
            <li><a target="_blank" href="https://connortwele.github.io/petStoreProject/">Pet Store</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/connor-twele-7388481b0/">Linkden</a></li>
          </ul>
        </div>
        


       
        <div class="col-md-4 mx-auto text-center">
          <h5 class="text-uppercase font-weight-bold names ">Jamie Schifrin</h5>
          <ul class="list-unstyled">
            <li><a target="_blank" href="https://github.com/jamieschifrin">Github</a></li>
            <li><a target="_blank" href="https://jamieschifrin.github.io/portfolio/">Portfolio</a></li>
            <li><a target="_blank" href="https://jamieschifrin.github.io/petStore/">Pet Store</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/jamie-schifrin-a70bb81b1/">Linkden</a></li>
          </ul>
        </div>


       

      </div>
    </div>




  

    <div class="footer-copyright py-3 text-center">
      <div class="container-fluid">
        © 2020 Copyright: <a href="#"> TwiddleSchifrin.com </a>

      </div>
    </div>

  </footer>


  );
}

export default FooterPage;