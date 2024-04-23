module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  roots: ['<rootDir>/src/tests'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover']
};
