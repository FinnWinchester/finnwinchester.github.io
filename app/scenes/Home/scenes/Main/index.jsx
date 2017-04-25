import React from 'react';
import {connect} from 'react-redux';

class HomeMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let style = {
      width: '100px'
    };
    return (
      <div className='home-main'>
        <div className='h1 center-align'>Welcome!</div>
        <div className='center-align'>
          <img src='/img/react.png' style={style}/>
        </div>
        <div className='h3 center-align'>This site is under construction.</div>
        <div className='h5 center-align'>Build with ReactJS.</div>
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

var HomeMain = connect(mapStateToProps, mapDispatchToProps)(HomeMainComponent);

export default HomeMain;
