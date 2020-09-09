import React, { Component } from 'react';
import axios from 'axios';
import './style/contact.css'
import  Navbar  from "./navigationbar"
import clock from '../assets/utone.jpg'
import {BACKEND_URL} from '../config'
export default class contact extends Component {
  constructor (props){
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: " ",
        email: " ",
        question: " ",
      }
    }
  onChangeName(e){
    this.setState({
      name: e.target.value
    })
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  onChangeQuestion(e){
    this.setState({
      question: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const contact ={
      name: this.state.name,
      email: this.state.email,
      question: this.state.question,
    }
    console.log(contact)
    axios.post(BACKEND_URL + 'contact/add', contact)
    .then((res)=>{
      console.log(res.data)
    })
    // window.location="/"
    this.setState({
        name: '',
        email: '',
        question: ''
    })
    window.alert('Thank you for your inquiry')
    console.log(contact)
  }
  render() {
    return (
      <div>
        <Navbar/>
      <div className="contactContainerReturn">
          <h3 className='text-center'>Contact Us</h3>
          <div className="containerContact">
            <div className="contentContact">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  >
                  </input>
              </div>
              <div className="form-group">
                  <label>Email:</label>
                  <input
                  type="email"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  >
                  </input>
              </div>
              <div className="form-group">
                <label>Questions and Comments:</label>
                  <textarea
                  type="text"
                  className="form-control"
                  value={this.state.question}
                  onChange={this.onChangeQuestion}
                  rows='5'
                  cols='10'
                  >
                  </textarea>
              </div>
              <div className="form-group">
                  <input
                  type="submit"
                  value="Send"
                  className="btn btn-primary"
                  />
              </div>
            </form>
            </div>
            <div className="content">
              <img className="contactClock" src={clock}></img>
            </div>
          </div>
      </div>
      </div>
    )
  }
}