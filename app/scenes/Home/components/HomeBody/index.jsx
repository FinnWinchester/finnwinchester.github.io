import React from 'react';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);

    let _get_age = birthday => {
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    this.state = {
      age: _get_age(new Date(1990, 7, 29))
    };
  }

  render() {
    let skillImageStyle = {
      width: '100%'
    };
    let skillHalfImageStyle = {
      width: '50%',
      float: 'left'
    };
    return (
      <div className='home-body'>
        <div className='zebra'>
          <div className='non-fluid-container'>
            <AboutMe/>
          </div>
        </div>
        <div className='zebra'>
          <div className='non-fluid-container'>
            <MySkills/>
          </div>
        </div>
        <div className='zebra'>
          <div className='non-fluid-container'>
            <MyProjects/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
