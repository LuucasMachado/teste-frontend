export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
  "\\\\node_modules\\\\",
  "\\.pnp\\.[^\\\\]+$"
  ],
  roots: ["<rootDir>"],
  transform: {
  "^.+\\.tsx?$": "ts-jest",
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  '<rootDir>/fileTransformer.js',
  '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
  };