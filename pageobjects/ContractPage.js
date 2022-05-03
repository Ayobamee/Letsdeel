const { expect } = require('@playwright/test')
const {
  randomcharacterGenerator,
} = require('../utils/randomcharacterGenerator')
const Randomchar = new randomcharacterGenerator()

class ContractPage {
  constructor(page) {
    this.contractModule = page.locator('text=Create A ContractNEW')
  }

  async createContract() {
    //Click contract module
    await this.contractModule.click()
  }
}

module.exports = { ContractPage }
