export default {
  transform: {
    "^.+\\.(ts|mjs|js|html)$": [
      "ts-jest",

      {
        tsconfig: "<rootDir>/tsconfig.spec.json",
        isolatedModules: true
      }
    ]
  },
  globals: {},
  displayName: "test-gen",
  collectCoverageFrom: ["./src/**"],
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
};
