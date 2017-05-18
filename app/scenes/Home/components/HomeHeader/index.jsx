import React from 'react';
import {connect} from 'react-redux';
import Atv from 'components/Atv/components/Atv';

class HomeHeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let style = {
      width: 250,
      height: 250,
      margin: '0 auto'
    };
    return (
      <div className='home-header valign-wrapper'>
        <div className='valign halign'>
          <div className='center-align'>
            <Atv layers={['/img/react.png']} staticFallback='http://kloc.pm/images/kloc-icon-flattened.jpg' style={style}/>
          </div>
          <div className='h5 center-align'>Built with ReactJS.</div>
        </div>
        <div className='finn-winchester'>RS</div>
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
