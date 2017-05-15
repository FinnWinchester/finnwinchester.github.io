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
                  <div className='row'>
                    <div className='col s12 m6'>
                      <h5><i className='fa fa-smile-o'></i> What I like</h5>
                      <p>Develop. I <i className='fa fa-heart'></i> programming.</p>
                      <p>Find a new framework or tool or library or whatever on the internet and test it to see what I can or can't do with it and to understand what it has better than others and what has worse so I am able to pick the best in the future.</p>
                      <p>Rick and Morty. Wubba lubba dub dub!</p>
                      <p>Driving. A lot.</p>
                      <p>Listening to all sort of music, from classical like Frédéric Chopin to dubsteb like Skrillex.</p>
                      <p>Playing videogames like Kingdom Hearts (my favourite saga) or Rocket League with my friends.</p>
                      <p>Playing the guitar even though it's been a long time ago since the last time.</p>
                      <p>To mock up every idea that came out to my mind using <a href='https://sketchapp.com/' target='_blank'>SketchApp</a>.</p>
                    </div>
                    <div className='col s12 m6'>
                      <h5><i className='fa fa-frown-o'></i> What I don't</h5>
                      <p>Politicals.</p>
                      <p>Absolute positions in CSS. They always break up my mind.</p>
                      <p>Ordering food and having it an hour later than expected.</p>
                      <p>Traffic jams.</p>
                      <p>Planning my week and have it messed up the next hour.</p>
                      <p>People who make too much noise. Talking, breathing, eating.</p>
                      <p>People who does not accepte constructive criticism.</p>
                      <p>Or those who does not accepte compliments.</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col s12'>
                      <h5><i className='fa fa-hand-peace-o'></i> What I am proud about</h5>
                      <p>To have gotten this far since I left the university without knowing what was I going to do with my life until the same summer when I, <strong>eureka!</strong>, found what I really wanted to study.</p>
                      <p>My small projects even though they don't have many downloads. I don't make them for people out there; I make them for myself so I can learn a little bit more.</p>
                      <p>My will to learn everything that can be interesting to be learned. JS framework? Yes! .NET? No, thanks.</p>
                    </div>
                  </div>
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
                <div className='content'>
                  <div>
                    <h5>Where is my car</h5>
                    <p>Not much to say. Mi very fist android app developed using Google Maps API. Have you ever found yourself lost in a new city without remembering where
                      <span style={{
                        textDecoration: 'line-through'
                      }}>THE HELL</span>
                      did you park your car? You can remember it with this simple app!. Link:
                      <a href='https://play.google.com/store/apps/details?id=cenaro.mycar' target='_blank'>WhereIsMyCar</a>.</p>
                  </div>
                  <div>
                    <h5>ChromaOS</h5>
                    <p>This project began more like a concept demo and evolved to a full equipped environment.</p>
                    <p>Providing tools like windowed sections (like desktop APPs) and a MacOS-like header bar you can develop, as said, desktop-like web-apps. You can even customize your own terminal! Awesome! SDK's guide found inside every repo.</p>
                    <p>ChromaOS: desktop-like web-apps, windowed sectoins. Link:
                      <a href='https://github.com/FinnWinchester/ChromaOS' target='_blank'>ChromaOS</a>.</p>
                    <p>ChromaOS Header bar: MacOS-like header bar. Link:
                      <a href='https://github.com/FinnWinchester/ChromaOS-Terminal' target='_blank'>ChromaOS Terminal</a>.</p>
                    <p>ChromaOS Lock screen: OS-like lock screen. Link:
                      <a href='https://github.com/FinnWinchester/ChromaOS-Lock-Screen' target='_blank'>ChromaOS Lock screen</a>.</p>
                    <p>ChromaOS Terminal: OS-like terminal, the one I am proudest of. Link:
                      <a href='https://github.com/FinnWinchester/ChromaOS-Terminal' target='_blank'>ChromaOS Terminal</a>.</p>
                  </div>
                  <div>
                    <h5>PaintJS</h5>
                    <p>Developed as a technical test for a recruitment, we can find here a ReactJS+Redux app integrating HTML5 canvas API. Undo, Redo, color picker, stroke's width picker... Many useful tools. Link:
                      <a href='https://github.com/FinnWinchester/paintJS' target='_blank'>PaintJS</a>.</p>
                  </div>
                  <div>
                    <h5>React Native concept test</h5>
                    <p>Since I am learning ReactJS I wanted to test what React Native was and offered when developing hybrid apps. The master branch contains a simple Hello World. The 'fauna-test' contains more elaborated content. Link:
                      <a href='https://github.com/FinnWinchester/React-Native-Testing' target='_blank'>React Native</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
