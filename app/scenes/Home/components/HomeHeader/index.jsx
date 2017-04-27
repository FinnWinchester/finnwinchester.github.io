import React from 'react';
import {connect} from 'react-redux';

class HomeHeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let style = {
      width: '100px'
    };
    return (
      <div className='home-header valign-wrapper'>
        <div className='valign halign'>
          <div className='h1 center-align'>Welcome!</div>
          <div className='center-align'>
            <img src='/img/react.png' style={style}/>
          </div>
          <div className='h3 center-align'>This site is under construction.</div>
          <div className='h5 center-align'>Build with ReactJS.</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
}

var HomeHeader = connect(mapStateToProps, mapDispatchToProps)(HomeHeaderComponent);

export default HomeHeader;
