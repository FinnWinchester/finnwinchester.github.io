module.exports = {
  modulePathIgnorePatterns: ['public', 'node_modules'],
  modulePaths: ['<rootDir>', '<rootDir>/src'],
  prettierPath: '<rootDir>/node_modules/prettier',
  resetModules: true,
  restoreMocks: true,
  setupFiles: ['<rootDir>/src/config/enzyme'],
  setupFilesAfterEnv: ['<rootDir>/src/config/jest'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/src/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/src/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],
  verbose: process.env.NODE_ENV === 'test'
};
