import React from 'react';
import {Link} from 'react-router';
import {DrawerMenu} from 'components';

let HeaderBar = () => (
  <div>
    <nav className="header-bar">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="javascript:;" data-activates="slide-out" className="toggle-drawer">
              <i className="material-icons">menu</i>
            </a>
          </li>
        </ul>
      </div>
      <DrawerMenu/>
    </nav>
  </div>
);

export default HeaderBar;
