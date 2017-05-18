import React from 'react';
import HolyTrinitySkill from './components/HolyTrinitySkill';
import SymfonySkill from './components/SymfonySkill';
import AngularJSSkill from './components/AngularJSSkill';
import ReactReduxSkill from './components/ReactReduxSkill';
import OtherSkills from './components/OtherSkills';

class MySkills extends React.Component {
  render() {
    return (
      <div>
        <div className='non-fluid-container'>
          <div className='content'>
            <div className='row'>
              <div className='col s12'>
                <div className='h4 title'>My skills</div>
              </div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <div className='card darken-1 padding-px-10'>
                  <HolyTrinitySkill/>
                </div>
              </div>
              <div className='col s12'>
                <div className='card darken-1 padding-px-10'>
                  <ReactReduxSkill/>
                </div>
              </div>
              <div className='col s12'>
                <div className='card darken-1 padding-px-10'>
                  <AngularJSSkill/>
                </div>
              </div>
              <div className='col s12'>
                <div className='card darken-1 padding-px-10'>
                  <SymfonySkill/>
                </div>
              </div>
              <div className='col s12'>
                <div className='card darken-1 padding-px-10'>
                  <OtherSkills/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MySkills;
