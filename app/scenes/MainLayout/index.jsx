import React from 'react';
import {Title, HeaderBar, SubheaderBar, Footer} from 'components';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <SubheaderBar/>
        <div className='main-layout'>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MainLayout;
