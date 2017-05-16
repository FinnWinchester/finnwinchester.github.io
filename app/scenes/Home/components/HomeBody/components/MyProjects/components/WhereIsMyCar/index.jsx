import React from 'react';

class WhereIsMyCar extends React.Component {
  render() {
    let _style = {
      textDecoration: 'line-through'
    };
    return (
      <div>
        <h5>Where is my car</h5>
        <p>Not much to say. Mi very fist android app developed using Google Maps API. Have you ever found yourself lost in a new city without remembering where <span style={_style}>THE HELL</span> did you park your car? You can remember it with this simple app!. Link: <a href='https://play.google.com/store/apps/details?id=cenaro.mycar' target='_blank'>WhereIsMyCar</a>.</p>
      </div>
    );
  }
}

export default WhereIsMyCar;
