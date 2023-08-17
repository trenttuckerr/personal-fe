// eslint-disable-next-line no-undef
module.exports = {
    env: {
      'jest/globals': true,
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(svg)$': '<rootDir>/src/mock.js',
      '\\.(css)$': '<rootDir>/src/mock.js',
    },
    testMatch: ['<rootDir>/tests/**/*.test.(js|jsx)'],
  };
  