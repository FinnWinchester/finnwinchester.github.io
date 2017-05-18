// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {
    joinTo: 'app.css'
  }
};

exports.plugins = {
  babel: {
    presets: ['latest', 'react'],
    plugins: ['transform-object-rest-spread', 'transform-class-properties']
  },
  less: {
    modules: false
  }
};

exports.hot = true;
