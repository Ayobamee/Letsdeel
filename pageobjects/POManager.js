const { LoginPage } = require('./LoginPage')
const {LandingPage} = require('./LandingPage')

class POManager {
  constructor(page) {
    this.page = page
    this.loginPage = new LoginPage(page)
    this.landingPage = new LandingPage(page)
  }

  getLoginPage() {
    return this.loginPage
  }

  getLandingPage() {
    return this.landingPage
  }
}

module.exports = { POManager }
