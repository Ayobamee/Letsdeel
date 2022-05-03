const { LoginPage } = require('./LoginPage')
const { LandingPage } = require('./LandingPage')
const { ContractPage } = require('./ContractPage')
const { FixedContractPage } = require('./FixedContractPage')
const { PayAsYouGoContractPage } = require('./PayAsYouGoContractPage')

class POManager {
  constructor(page) {
    this.page = page
    this.loginPage = new LoginPage(page)
    this.landingPage = new LandingPage(page)
    this.contractPage = new ContractPage(page)
    this.fixedContractPage = new FixedContractPage(page)
    this.payasyougoContractPage = new PayAsYouGoContractPage(page)
  }

  getLoginPage() {
    return this.loginPage
  }

  getLandingPage() {
    return this.landingPage
  }

  getContractPage() {
    return this.contractPage
  }
  getFixedContractPage() {
    return this.fixedContractPage
  }

  getPayAsYouGoContractPage() {
    return this.payasyougoContractPage
  }
}

module.exports = { POManager }
