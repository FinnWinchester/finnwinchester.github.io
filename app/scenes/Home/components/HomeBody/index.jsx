import React from 'react';
import {connect} from 'react-redux';

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
        <div className='non-fluid-container'>
          <div className='row'>
            <div className='col s12'>
              <div className='panel panel-margin'>
                <div className='h4 title underlined'>About me</div>
                <div className='content'>
                  Body
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col s12'>
              <div className='panel panel-margin'>
                <div className='h4 title underlined'>My skills</div>
                <div className='content'>
                  <div className='row'>
                    <div className='col s4'>
                      <img src='img/symfony_logo_vertical.png' style={skillImageStyle}/>
                    </div>
                    <div className='col s8'>
                      <div className='h5 title'>Symfony</div>
                      <p>Working for 4 years using this PHP based framework. The version used was the 2.8.*.</p>
                      <p>All kinds of projects were developed with it: from corporative web pages for different enterprises to various e-commerce, all of them with multi-language and most of them with a content management system.</p>
                      <p>When developing web-apps the role based security system was my day to day, improving it day after day to guarantee the system was the safest.</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col s8'>
                      <div className='h5 title'>AngularJS</div>
                      <p>Working for 2 years using this JavaScript based framework using the version 1.5.* along with MongoDB and NodeJS.</p>
                      <p>In an enterprise whose product was a SaaS (Software as a Service) my tasks came from analyzing the new step requirements to work very in touch with UI/UX designers to guarantee the high detailed developement of the product.</p>
                    </div>
                    <div className='col s4'>
                      <img src='img/angular_js.png' style={skillImageStyle}/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col s4'>
                      <img src='img/react.png' style={skillHalfImageStyle}/>
                      <img src='img/redux.png' style={skillHalfImageStyle}/>
                    </div>
                    <div className='col s8'>
                      <div className='h5 title'>ReactJS & Redux</div>
                      <p>Recently I discovered ReactJS library developed by Facebook and it took my heart from the beginnig due to its flexibility and how easy to learn was it.</p>
                      <p>ReactjS by itself it's pretty good to develop from small to large sites, including single pages for corporative websites and large applications.</p>
                      <p>Since this library is only the V from the MVC pattern, Redux (which is Flux architecture made JS library) came in our help bringing us the C from the MVC but not exactly like we understand them from Java or AngularJS.</p>
                      <p>It took me a whole week of full work to understand how ReactJS and Redux worked together, reading lots of articles on the internet and developing tons of micro-components to test them and see what happens.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col s12'>
              <div className='panel panel-margin'>
                <div className='h4 title underlined'>My projects</div>
                <div className='content'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
