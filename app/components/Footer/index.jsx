import React from 'react';

let Footer = () => (
  <footer className='page-footer'>
    <div className='container'>
      <div className='row'>
        <div className='col l4 s12'>
          <h5 className='white-text'>Contact</h5>
          <p className='grey-text text-lighten-4'>If you want to contact me you can do it throught my e-mail address <a href='mailto:rubensillero90@gmail.com' target='_blank' className='black-link'>rubensillero90@gmail.com</a>.</p>
        </div>
        <div className='col l4 s12'>
          <h5 className='white-text'>What am I up to</h5>
          <p className='grey-text text-lighten-4'>Beers, work, traing, learn, teach. Enjoy life.</p>
        </div>
        <div className='col l4 s12'>
          <h5 className='white-text'>Who is this Finn Winchester?</h5>
          <p className='grey-text text-lighten-4'>It is my nickname on the internet.</p>
        </div>
      </div>
    </div>
    <div className='footer-copyright'>
      <div className='container'>
        © 2017 Copyright Text
        <div className='grey-text text-lighten-4 right'>Designed and coded by Finn Winchester</div>
      </div>
    </div>
  </footer>
);

export default Footer;
