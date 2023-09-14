// eslint-disable-next-line no-undef
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/src/mock.js',
    '\\.(css)$': '<rootDir>/src/mock.js',
    '\\.(mp4)$': '<rootDir>/src/mock.js',
    '\\.(webm)$': '<rootDir>/src/mock.js',
    '\\.(png)$': '<rootDir>/src/mock.js',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/tests/**/*.test.(js|jsx)'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.jsx'],
};
