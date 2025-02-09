const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  projectId: 'cmzhw3',
  chromeWebSecurity: true,
  e2e: {
    setupNodeEvents(on, config) {},
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    modifyObstructiveCode: true,
    //force: true,
    //waitForAnimations: false,
    //animationDistanceThreshold: 100,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
