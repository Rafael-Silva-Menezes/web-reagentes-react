module.export = {
  roots:['<rootDir>/src'],
  collectCoverageFrom:[
    '<rootDir>/src/**/*.ts{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnviromente: 'node',
  transform: {
    '.+\\.ts$':'ts-jest'
  }
}
