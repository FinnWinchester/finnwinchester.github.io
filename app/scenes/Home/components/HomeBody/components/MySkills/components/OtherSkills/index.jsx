import React from 'react';

class OtherSkills extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col l12'>
            <div className='h5 title'>Also...</div>
          </div>
          <div className='col l2 m3 s4'>
            <img src='img/android.png' className='full-width-image'/>
          </div>
          <div className='col l2 m3 s4'>
            <img src='img/brunch.jpeg' className='full-width-image'/>
          </div>
          <div className='col l2 m3 s4'>
            <img src='img/nodejs.png' className='full-width-image'/>
          </div>
          <div className='col l2 m3 s4'>
            <img src='img/mysql.png' className='full-width-image'/>
          </div>
        </div>
      </div>
    );
  }
}

export default OtherSkills;
