import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './style/attractions.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Navbar  from "./navigationbar"
import {BACKEND_URL} from '../config'

// Single Exercise Component
const Attraction = (props) => {
  return (
    <div>
    <Navbar/>
    <div className="">
    <Card className="attractionsCard" style={{  }}>
      <Card.Img className="cardImage" variant="top" src={props.attraction.imageURL} />
      <Card.Body>
        <Card.Title className="text-center">{props.attraction.name}</Card.Title>
        {/* <Button variant="secondary" block> */}
        <Card.Text className="text-center">
          <Link className="text-center text-dark"to={"/attractions/" + props.attraction._id}>Learn More</Link>
        </Card.Text>
        {/* </Button> */}
        <Card.Text className="text-center">
          <a  className="text-dark" href= {props.attraction.website}>Website</a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}
export default class ExercisesList extends Component {
  constructor(props){
    super(props)
    this.state={
      attractions: []
    };
  }
  componentDidMount(){
    axios.get(BACKEND_URL + 'attractions/')
      .then(response => {
        this.setState({
          attractions: response.data
        })
        console.log('this is the class project')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  exerciseList(){
    return this.state.attractions.map((currentAttraction) =>{
      return <Attraction
        attraction = {currentAttraction}
        key={currentAttraction._id}
      />
    })
  }
  render() {
    return (
      <div className ="attractionsContainer">
        <h3 className="text-center attractionsHeader">Attractions</h3>
        <div className="attractionsInnerContainer">
            {this.exerciseList()}
        </div>
      </div>
    )
  }
}