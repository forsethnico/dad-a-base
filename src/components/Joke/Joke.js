import React from "react";
import "./Joke.css";

const Joke = ({joke, handleClick}) => {
    return (
     <div className="joke-card">
      <p>{joke}</p>
      <button className='next-joke-btn' onClick={() => handleClick()}>Next Joke!</button>
    </div>
    )
  }

export default Joke;
