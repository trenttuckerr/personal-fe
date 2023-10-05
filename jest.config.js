// eslint-disable-next-line no-undef
module.exports = {
    testEnvironment: 'jsdom',
    // Define the file patterns Jest should look for when running tests
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    // Set up the module name mapper to handle assets, CSS, etc.
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/src/mock.js',
    },
  };