import React from 'react';

class ShowIf extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.show && this.props.children}
      </div>
    );
  }
}

export default ShowIf;
