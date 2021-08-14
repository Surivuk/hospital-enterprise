/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/test"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@domain/(.*)$": "<rootDir>/domain/$1",
  },
  collectCoverage: true,
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  // setupFiles: ['<rootDir>/src/test/init.ts']
};