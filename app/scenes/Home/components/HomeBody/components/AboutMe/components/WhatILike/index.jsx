import React from 'react';

class WhatILike extends React.Component {
  render() {
    return (
      <div>
        <h5>
          <i className='fa fa-smile-o'></i>
          What I like</h5>
        <p>Develop. I
          <i className='fa fa-heart'></i>
          programming.</p>
        <p>Find a new framework or tool or library or whatever on the internet and test it to see what I can or can't do with it and to understand what it has better than others and what has worse so I am able to pick the best in the future.</p>
        <p>Rick and Morty. Wubba lubba dub dub!</p>
        <p>Driving. A lot.</p>
        <p>Listening to all sort of music, from classical like Frédéric Chopin to dubsteb like Skrillex.</p>
        <p>Playing videogames like Kingdom Hearts (my favourite saga) or Rocket League with my friends.</p>
        <p>Playing the guitar even though it's been a long time ago since the last time.</p>
        <p>To mock up every idea that came out to my mind using <a href='https://sketchapp.com/' target='_blank'>SketchApp</a>.</p>
      </div>
    );
  }
}

export default WhatILike;
