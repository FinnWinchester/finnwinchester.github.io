import React from 'react';
import WhereIsMyCar from './components/WhereIsMyCar';
import ChromaOS from './components/ChromaOS';
import PaintJS from './components/PaintJS';
import ReactNative from './components/ReactNative';

class MyProjects extends React.Component {
  render() {
    return (
      <div>
        <div className='non-fluid-container'>
          <div className='content'>
            <div className='row'>
              <div className='col s12'>
                <div className='h4 title'>My projects</div>
              </div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <div className='card darken-1 padding-px-10'>
                  <WhereIsMyCar/>
                </div>
              </div>
              <div className='col s12'>
                <div className='card darken-1 padding-px-10'>
                  <ChromaOS/>
                </div>
              </div>
              <div className='col s12'>
                <div className='card darken-1 padding-px-10'>
                  <PaintJS/>
                </div>
              </div>
              <div className='col s12'>
                <div className='card darken-1 padding-px-10'>
                  <ReactNative/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProjects;
