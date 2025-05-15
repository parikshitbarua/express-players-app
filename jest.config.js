module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["<rootDir>/tests/**/*.test.@(ts|js)"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  }
};
