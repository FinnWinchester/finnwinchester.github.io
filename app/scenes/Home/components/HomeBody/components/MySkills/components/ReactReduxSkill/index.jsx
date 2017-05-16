import React from 'react';

class ReactReduxSkill extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col s4'>
            <img src='img/react.png' className='react-redux-image'/>
            <img src='img/redux.png' className='react-redux-image'/>
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
    );
  }
}

export default ReactReduxSkill;
