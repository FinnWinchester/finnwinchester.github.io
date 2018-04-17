import React from 'react';

class BabelSkill extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col l4 m4 s8 offset-s2'>
            <img src='img/jest.png' className='full-width-image'/>
          </div>
          <div className='col l8 m8 s12'>
            <div className='h5 title'>Testing with Jest</div>
            <p>Writting tests are the most important part when developing software for many companies and there are many tools out there: Jasmine, Mocha, Karma... My fav is Jest.</p>
            <p>Jest has been developed by Facebook who also developed React. Which tool can be better to test React than one made by the same guys who developed what you want to test?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BabelSkill;
