import React from 'react';

class SymfonySkill extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col s8 offset-s2 l4 m8 offset-m2'>
            <img src='img/symfony_logo_vertical.png' className='symfony-image'/></div>
          <div className='col s12 l8'>
            <div className='h5 title'>Symfony</div>
            <p>Working for 4 years using this PHP based framework. The version used was the 2.8.*.</p>
            <p>All kinds of projects were developed with it: from corporative web pages for different enterprises to various e-commerce, all of them with multi-language and most of them with a content management system.</p>
            <p>When developing web-apps the role based security system was my day to day, improving it day after day to guarantee the system was the safest.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SymfonySkill;
