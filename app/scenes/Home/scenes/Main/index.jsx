import React from 'react';
import {connect} from 'react-redux';

class HomeMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='home-main'></div>
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
