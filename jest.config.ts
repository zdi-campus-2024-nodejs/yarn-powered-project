import {Config} from "@jest/types";

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 60000,
  roots: ['<rootDir>'],
  collectCoverage: true,
  coverageDirectory: 'test-results',
  coverageProvider: "v8",
  coverageReporters: [
    'text',
    'text-summary',
    'clover',
    ["lcov", { "projectRoot": "./" }],
  ],
  testMatch: ["**/test/**/*.(test|spec).ts?(x)"],
  transform: {'^.+\\.[jt]s?$': 'ts-jest'},
  reporters: [
    'default'
    // ['jest-junit', {
    //   outputDirectory: 'test-results',
    //   outputName: 'test-report.xml',
    // }],
  ]
  // testResultsProcessor: 'jest-sonar-reporter',
};
export default config;
