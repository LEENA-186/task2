//import logo from './logo.svg';
//import './App.css';
//import App from './App.js'
import React, {Component} from 'react'
class Form extends Component{
  constructor(props){
    super(props)

      this.state = {
        Username:'',
        City:'',
        //text =() => (`${this.state.username} ${this.state.city} `)
        text:''
        
      }
    }
    handleUsernameChange =(event)=> {
      this.setState({
        username: event.target.value
        
      });
    }
    handleCityChange =(event)=> {
      this.setState({
        city: event.target.value
        
      });
    }
    handleTextChange =(event)=> {
      this.setState({
        text: event.target.value     
      });
    }
    handleSubmit = event => {
      alert(`${this.state.username} ${this.state.city} ${this.state.text} `)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username</label>
        <input type= "text"
         value={this.state.username}
          onChange={this.handleUsernameChange}/>
      </div>

      <div>
      <label>City</label>
      <input type="text" 
      value={this.state.city} 
      onChange={this.handleCityChange}/>
       </div>
       <div>
      <label>Text</label>
      <textarea
      value={this.state.text} 
      onChange={this.handleTextChange}/>
     </div>
     <div>
       <a href ="anotherpage">
     <button type="submit" onClick={this.handleClick}>Submit</button>
      </a>
       </div>
       
       </form>
    )
  }
}

export default Form;
