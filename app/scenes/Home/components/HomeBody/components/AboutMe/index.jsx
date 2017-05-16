import React from 'react';
import WhatILike from './components/WhatILike';
import WhatIDont from './components/WhatIDont';
import WhatIAmProudOf from './components/WhatIAmProudOf';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <div className='non-fluid-container'>
          <div className='h4 title'>About me</div>
          <div className='content'>
            <div className='row'>
              <div className='col s12 m6'>
                <div className='card darken-1 padding-px-10'>
                  <WhatILike/>
                </div>
              </div>
              <div className='col s12 m6'>
                <div className='card darken-1 padding-px-10'>
                  <WhatIDont/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <div className='card darken-1 padding-px-10'>
                  <WhatIAmProudOf/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
