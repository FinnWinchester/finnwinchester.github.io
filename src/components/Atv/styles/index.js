const styles = {
  root: {
    borderRadius: 5,
    transformStyle: 'preserve-3d',
    WebkitTapHighlightColor: 'rgba(#000, 0)',
  },

  staticFallback: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 5,
  },

  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    transition: 'all 0.2s ease-out',
  },

  shadowOnHover: {
  },

  layers: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    transformStyle: 'preserve-3d',
  },

  renderedLayer: {
    position: 'absolute',
    width: '104%',
    height: '104%',
    top: '-2%',
    left: '-2%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'transparent',
    backgroundSize: 'cover',
    transition: 'all 0.1s ease-out',
  },

  shadow: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    width: '90%',
    height: '90%',
    transition: 'all 0.2s ease-out',
  },

  shine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 5,
    background: 'linear-gradient(135deg, rgba(255, 255, 255, .25) 0%, rgba(255, 255, 255, 0) 60%)',
  },
};

export default styles;
