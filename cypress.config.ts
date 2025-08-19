import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  port: 4001,
  chromeWebSecurity: false,

  env: {
    /*
    REACT_APP_GOOGLE_CLIENT_ID=118017780014-rtii5s8e4948gvh4312l0j2vn5rd1dac.apps.googleusercontent.com
REACT_APP_API_GOOGLE_AUTH=https://www.googleapis.com/calendar/v3
REACT_APP_API_GOOGLE_SCOPE = https://www.googleapis.com/auth/calendar.readonly
*/
    /*       googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,
    googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET, */
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    indexHtmlFile: "cypress/support/component-index.html",
  },

  e2e: {
    baseUrl: "http://localhost:4000",
    setupNodeEvents(on, config) {},
    testIsolation: false,
  },
});
