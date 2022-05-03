const { LoginPage } = require('./LoginPage')
const { LandingPage } = require('./LandingPage')
const { FixedContractPage } = require('./FixedContractPage')

class POManager {
  constructor(page) {
    this.page = page
    this.loginPage = new LoginPage(page)
    this.landingPage = new LandingPage(page)
    this.fixedContracPage = new FixedContractPage(page)
  }

  getLoginPage() {
    return this.loginPage
  }

  getLandingPage() {
    return this.landingPage
  }
  getFixedContractPage() {
    return this.fixedContracPage
  }
}

module.exports = { POManager }
