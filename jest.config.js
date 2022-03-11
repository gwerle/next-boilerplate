module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/pages/**',
    '!**/configuration/**',
  ],
  modulePaths: ['<rootDir>/src/'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    'src/pages/',
    'cypress/',
    'public/',
  ],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@configuration/(.*)': '<rootDir>/src/configuration/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@types/(.*)': '<rootDir>/src/@types/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@themes/(.*)': '<rootDir>/src/themes/$1',
  },
  coverageThreshold: {
    global: {
      lines: 40,
    },
  },
};
