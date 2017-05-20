import React from 'react';

class BabelSkill extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col l4 m4 s8 offset-s2'>
            <img src='img/babel.png' className='full-width-image'/>
          </div>
          <div className='col l8 m8 s12'>
            <div className='h5 title'>ES6 + Babel</div>
            <p>ECMAScript 6 (and 7) needs to be transpiled because modern browsers don't fully support it. Here is where BabelJS comes in our help.</p>
            <p>New syntax like spread operator or arrow functions can be used thanks to Babel's huge community.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BabelSkill;
