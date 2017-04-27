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
      <div className='home-body'>
        <div className='h2'>Body</div>
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
