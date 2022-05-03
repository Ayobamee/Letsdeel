const { expect } = require('@playwright/test')
const {
  randomcharacterGenerator,
} = require('../utils/randomcharacterGenerator')
const Randomchar = new randomcharacterGenerator()

class LandingPage {
  constructor(page) {
    this.successfulLoginMessage = page.locator('h6:has-text("Ayo")')
    this.teamModule = page.locator('span:has-text("Team")')
    this.homeModule = page.locator('text=HomeNEW')
    this.createaContractModule = page.locator('text=Create A ContractNEW')
    this.contractModule = page.locator('text=Contracts >> nth=0')
    this.reportModule = page.locator('text=ReportsNEW')
    this.compliancedocmentModule = page.locator('text=Compliance Documents')
    this.invoiceandReceiptModule = page.locator('text=Invoices & Receipts')
    this.teamSettingsModule = page.locator('text=Team Settings')
    this.organizationModule = page.locator('span:has-text("Organization")')
    this.taxFormModule = page.locator('text=Tax Forms')
    this.appsandPerksModule = page.locator('text=Apps & PerksNEW')
    this.organizationsSettingsModule = page.locator(
      'text=Organization Settings >> nth=0'
    )
  }

  async assertLogin() {
    //Assert login message
    await expect(this.successfulLoginMessage).toBeVisible()
    //Assert team module
    await expect(this.teamModule).toBeVisible()
    //Assert home module
    await expect(this.homeModule).toBeVisible()
    //Assert create a contract module
    await expect(this.createaContractModule).toBeVisible()
    //Assert contract module
    await expect(this.contractModule).toBeVisible()
    //Assert report module
    await expect(this.reportModule).toBeVisible()
    //Assert compliance document module
    await expect(this.compliancedocmentModule).toBeVisible()
    //Assert invoice and receipt module
    await expect(this.invoiceandReceiptModule).toBeVisible()
    //Assert Settings module
    await expect(this.teamSettingsModule).toBeVisible()
    //Assert Organization module
    await expect(this.organizationModule).toBeVisible()
    //Assert Tax form module
    await expect(this.taxFormModule).toBeVisible()
    //Assert Apps and Perks module
    await expect(this.appsandPerksModule).toBeVisible()
    //Assert Organization settings module
    await expect(this.organizationsSettingsModule).toBeVisible()
  }
}

module.exports = { LandingPage }
