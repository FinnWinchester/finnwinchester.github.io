import React from 'react';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';

class HomeHeader extends React.Component {
  render() {
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
