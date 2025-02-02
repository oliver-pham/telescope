const baseConfig = require('../jest.config.base');

module.exports = {
  ...baseConfig,
  setupFiles: ['<rootDir>/test/jest.setup.js'],
  rootDir: '../',
  testMatch: ['<rootDir>/test/**/*.test.js'],
  collectCoverageFrom: ['<rootDir>/src/backend/**/*.js'],
  testEnvironment: 'node',
};
