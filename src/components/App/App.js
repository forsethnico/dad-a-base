import React, { Component } from 'react';
import { fetchJoke } from '../../apiCalls';
import './App.css'
import Joke from '../Joke/Joke';
import dad from '../../assets/dad.png'

class App extends Component {
    constructor() {
        super();
        this.state= {
          joke: [],
          error: ''
        }
    }

    requestJoke = () => {
      fetchJoke()
      .then(joke => this.setState({joke: joke.joke}))
      .catch(err => this.setState({error: 
      'Something went wrong. Please try again.'}))
    }

    componentDidMount = () => {
     this.requestJoke() 
    }

    handleClick = () => {
      this.requestJoke()
    }

    render() {
        return (
          <main className = 'App'>
            <h1>DAD·A·BASE</h1>
            <img
              className="dad-backdrop"
              src={dad}
              alt="retro dad"
            />
            {!this.state.error && <Joke joke={this.state.joke} handleClick={this.handleClick}/>}
            {this.state.error && <h4 className="error-message">{this.state.error}</h4>}         
          </main>
        )
    }
}

export default App;
