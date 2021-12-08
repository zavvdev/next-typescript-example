const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.env.PWD);

module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/*.types.ts',
    '!**/src/tests/**',
    '!**/src/types/**',
    '!**src/pages/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/src/tests/mocks/styleMock.ts',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$':
      '<rootDir>/src/tests/mocks/fileMock.ts',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};