import React from 'react';

class PanelHeader extends React.Component {
  render() {
    return (
      <div className="panel-header">
        <div className="panel-header-wrapper">
          <div className="panel-header-title">
            {this.props.title}
          </div>
        </div>
      </div>
    );
  }
}

export default PanelHeader;
