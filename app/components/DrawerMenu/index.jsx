import React from 'react';
import {Link} from 'react-router';

export default class DrawerMenu extends React.Component {

  componentDidMount() {
    $('.toggle-drawer').sideNav();
    $('.actionable').on('click', () => {
      $('.toggle-drawer').sideNav('hide');
    });
  }

  render() {
    return (
      <ul id='slide-out' className='side-nav'>
        <li>
          <div className='userView'>
            <Link to='/' className='actionable'>
              <img className='circle' src='http://www.gravatar.com/avatar/e2fd5e05b4ca284f9aff71d0bdefe1c2'/>
            </Link>
            <Link to='/' className='actionable'>
              <span className='white-text name'>Rubén Sillero</span>
            </Link>
            <a href='mailto:rubensillero90@gmail.com'>
              <span className='white-text email'>rubensillero90@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <Link to='/' className='actionable'>
            <i className='material-icons'>cloud</i>First Link With Icon
          </Link>
        </li>
        <li>
          <Link to='/' className='actionable'>Second Link</Link>
        </li>
        <li>
          <div className='divider'></div>
        </li>
        <li>
          <Link to='/' className='actionable'>Subheader</Link>
        </li>
        <li>
          <Link to='/' className='actionable'>Third Link With Waves</Link>
        </li>
      </ul>
    )
  }
}
