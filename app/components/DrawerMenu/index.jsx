import React from 'react';
import {Link} from 'react-router';

export default class DrawerMenu extends React.Component {
  render() {
    return (
      <ul id="slide-out" className="side-nav">
        <li>
          <div className="userView">
            <a href="/"><img className="circle" src="http://www.gravatar.com/avatar/e2fd5e05b4ca284f9aff71d0bdefe1c2>"/></a>
            <a href="/">
              <span className="white-text name">Rubén Sillero</span>
            </a>
            <a href="mailto:rubensillero90@gmail.com">
              <span className="white-text email">rubensillero90@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <a href="/">
            <i className="material-icons">cloud</i>First Link With Icon</a>
        </li>
        <li>
          <Link to="/">Second Link</Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a className="subheader">Subheader</a>
        </li>
        <li>
          <a className="waves-effect" href="/">Third Link With Waves</a>
        </li>
      </ul>
    );
  }
}
