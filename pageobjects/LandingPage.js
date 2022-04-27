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
    this.contractModule = page.locator('text=Create A ContractNEW')
    this.fixedContractModule = page.locator('.box div')
    this.fillUserNameField = page.locator('input[name="name"]')
    this.contractResidenceDropdown = page.locator(
      '.deel-ui__select.select .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container'
    )
    this.preferredCountry = page.locator(
      '#react-select-3-option-1-2 >> text=United States'
    )
    this.StateDropdown = page.locator(
      '.deel-ui__stack .deel-ui__stack div:nth-child(2) .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container'
    )
    this.preferredState = page.locator(
      '#react-select-5-option-0 >> text=Alabama'
    )
    this.jobTitlefield = page.locator('input[name="jobTitle"]')
    this.preferredJob = page.locator('text=QA Engineer')
    this.contractorLeveldropdown = page.locator(
      '.deel-ui__stack div:nth-child(4) .flex .deel-ui__select .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container'
    )
    this.preferredJobLevel = page.locator(
      '#react-select-4-option-3 >> text=Senior (Individual Contributor Level 3)'
    )
    this.scopeofworkField = page.locator('textarea[name="scope"]')
    this.scopeofWorkTextarea = page.locator('textarea:has-text("t")')
    this.contractDateField = page.locator('input[name="effectiveDate"]')
    this.preferredDate = page.locator('[aria-label="Apr 26\\, 2022"]')
    this.nextButton = page.locator('button:has-text("next")')
    this.currencyDropdown = page.locator('.deel-ui__select__value-container')
    this.preferredCurrency = page.locator(
      '#react-select-6-option-37 >> text=GBP - British Pound'
    )
    this.ratefield = page.locator('input[name="rate"]')
    this.frequencyDropdown = page.locator(
      '.deel-ui__select.select .deel-ui__select__input-container .deel-ui__select__control'
    )
    this.preferredfrequency = page.locator('#react-select-7-option-0')
    this.specialclauseButton = page.locator(
      'button:has-text("add a special clause")'
    )
    this.specialClauseTextField = page.locator('textarea')
    this.createContractButton = page.locator(
      'button:has-text("create contract")'
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

  async createContract() {
    //Click contract module
    await this.contractModule.click()
    //Click fixed contract module
    await this.fixedContractModule.first().click()
  }

  async completeContractCreation() {
    //Fill name
    await this.fillUserNameField.fill('Test' + Randomchar.randomChar(4))
    //Click contract residence dropdown
    await this.contractResidenceDropdown.first().click()
    //Select preferred country
    await this.preferredCountry.click()
    //Click state dropdown
    await this.StateDropdown.click()
    //Select preferred state
    await this.preferredState.click()
    //Click job title field
    await this.jobTitlefield.click()
    //Input qa
    await this.jobTitlefield.fill('qa')
    //Select Preferred Job title
    await this.preferredJob.nth(1).click()
    //Click contractor level dropdown
    await this.contractorLeveldropdown.click()
    //Click preferred Job level
    await this.preferredJobLevel.click()
    //Click scope of work
    await this.scopeofworkField.click()
    //Type t
    await this.scopeofworkField.fill('t')
    //Press caplock
    await this.scopeofworkField.press('CapsLock')
    //Type Test
    await this.scopeofWorkTextarea.fill('Test')
    //Click Contract Date field
    await this.contractDateField.click()
    //Click preferred date
    await this.preferredDate.click()
    //Click next
    await this.nextButton.click()
    //Click currency dropdown
    await this.currencyDropdown.first().click()
    //Click preferred currecny
    await this.preferredCurrency.click()
    //Click rate field
    await this.ratefield.click()
    //Fill rate field
    await this.ratefield.fill('1000')
    //Click frequency dropdown
    await this.frequencyDropdown.first().click()
    //Click preferred frequency
    await this.preferredfrequency.click()
    //Click next
    await this.nextButton.click()
    //Click next
    await this.nextButton.click()
    //Click special clause
    await this.specialclauseButton.click()
    //Click special clause field
    await this.specialClauseTextField.click()
    //Click special clause field
    await this.specialClauseTextField.click()
    //Fill testing deel
    await this.specialClauseTextField.fill('Testing deel')
    //Click next
    await this.nextButton.click()
    await this.createContractButton.click()
  }
}

module.exports = { LandingPage }
