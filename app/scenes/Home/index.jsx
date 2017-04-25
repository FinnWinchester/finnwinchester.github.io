import React from 'react';
import {connect} from 'react-redux';
import {HomeMain} from './scenes';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HomeMain/>
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

var Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
