export default {
    testEnvironment: 'jsdom',
    // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[tj]s?(x)'
    ],
    testPathIgnorePatterns: ['/node_modules/'],
  };
  