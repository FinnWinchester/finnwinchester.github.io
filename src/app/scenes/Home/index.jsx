import React from 'react';
import {connect} from 'react-redux';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='home-section content'>
        {this.props.children}
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
