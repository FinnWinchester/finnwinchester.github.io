import React from 'react';
import {connect} from 'react-redux';
import {HomeHeader} from './components';
import {HomeBody} from './components';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HomeHeader/>
        <HomeBody/>
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
