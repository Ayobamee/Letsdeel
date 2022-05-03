const { expect } = require('@playwright/test')
const {
  randomcharacterGenerator,
} = require('../utils/randomcharacterGenerator')
const Randomchar = new randomcharacterGenerator()

class PayAsYouGoContractPage {
  constructor(page) {
    this.contractModule = page.locator('.anchor.heap-start-payg-contract .box')
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
    this.preferredDate = page.locator('[aria-label="May 2\\, 2022"]')
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

  async openPayasyougoContractPage() {
    //Click contract module
    await this.contractModule.click()
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

  // async completeContractCreation() {
  //   // // Go to https://app.deel.training/
  //   // await page.goto('https://app.deel.training/')
  //   // // Go to https://app.deel.training/login
  //   // await page.goto('https://app.deel.training/login')
  //   // // Click [placeholder="Type your email"]
  //   // await page.locator('[placeholder="Type your email"]').click()
  //   // // Fill [placeholder="Type your email"]
  //   // await page
  //   //   .locator('[placeholder="Type your email"]')
  //   //   .fill('info@quales.tech')
  //   // // Press Tab
  //   // await page.locator('[placeholder="Type your email"]').press('Tab')
  //   // // Press CapsLock
  //   // await page.locator('input[name="password"]').press('CapsLock')
  //   // // Fill input[name="password"]
  //   // await page.locator('input[name="password"]').fill('Iamayobami123!')
  //   // // Click form button:has-text("log in")
  //   // await Promise.all([
  //   //   page.waitForNavigation(/*{ url: 'https://app.deel.training/' }*/),
  //   //   page.locator('form button:has-text("log in")').click(),
  //   // ])
  //   // // Click #CybotCookiebotDialogBodyButtonAccept
  //   // await page.locator('#CybotCookiebotDialogBodyButtonAccept').click()
  //   // // Click .deel-ui__icon-close-1
  //   // await page.locator('.deel-ui__icon-close-1').click()
  //   // // Click text=Create A ContractNEW
  //   // await page.locator('text=Create A ContractNEW').click()
  //   // await expect(page).toHaveURL('https://app.deel.training/create')
  //   // // Click .anchor.heap-start-payg-contract .box
  //   // await page.locator('.anchor.heap-start-payg-contract .box').click()
  //   // await expect(page).toHaveURL(
  //   //   'https://app.deel.training/create/pay-as-you-go'
  //   // )
  //   // Click input[name="name"]
  //   await page.locator('input[name="name"]').click()
  //   // Press CapsLock
  //   // await page.locator('input[name="name"]').press('CapsLock')
  //   // // Fill input[name="name"]
  //   // await page.locator('input[name="name"]').fill('Ayo')
  //   // // Click .deel-ui__select.select .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container >> nth=0
  //   // await page
  //   //   .locator(
  //   //     '.deel-ui__select.select .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container'
  //   //   )
  //   //   .first()
  //   //   .click()
  //   // // Click #react-select-3-option-1-2 >> text=United States
  //   // await page
  //   //   .locator('#react-select-3-option-1-2 >> text=United States')
  //   //   .click()
  //   // // Click .deel-ui__stack .deel-ui__stack div:nth-child(2) .deel-ui__select__input-container .deel-ui__select__control
  //   // await page
  //   //   .locator(
  //   //     '.deel-ui__stack .deel-ui__stack div:nth-child(2) .deel-ui__select__input-container .deel-ui__select__control'
  //   //   )
  //   //   .click()
  //   // // Click #react-select-5-option-2 >> text=Arizona
  //   // await page.locator('#react-select-5-option-2 >> text=Arizona').click()
  //   // // Click input[name="jobTitle"]
  //   // await page.locator('input[name="jobTitle"]').click()
  //   // // Press CapsLock
  //   // await page.locator('input[name="jobTitle"]').press('CapsLock')
  //   // // Fill input[name="jobTitle"]
  //   // await page.locator('input[name="jobTitle"]').fill('')
  //   // // Press CapsLock
  //   // await page.locator('input[name="jobTitle"]').press('CapsLock')
  //   // // Fill input[name="jobTitle"]
  //   // await page.locator('input[name="jobTitle"]').fill('QA ')
  //   // // Click text=Manual QA Engineer
  //   // await page.locator('text=Manual QA Engineer').click()
  //   // // Click .deel-ui__stack div:nth-child(4) .flex .deel-ui__select .deel-ui__select__input-container .deel-ui__select__control
  //   // await page
  //   //   .locator(
  //   //     '.deel-ui__stack div:nth-child(4) .flex .deel-ui__select .deel-ui__select__input-container .deel-ui__select__control'
  //   //   )
  //   //   .click()
  //   // // Click #react-select-4-option-4 >> text=Lead (Individual Contributor Level 4)
  //   // await page
  //   //   .locator(
  //   //     '#react-select-4-option-4 >> text=Lead (Individual Contributor Level 4)'
  //   //   )
  //   //   .click()
  //   // // Click textarea[name="scope"]
  //   // await page.locator('textarea[name="scope"]').click()
  //   // // Fill textarea[name="scope"]
  //   // await page.locator('textarea[name="scope"]').fill('t')
  //   // // Press CapsLock
  //   // await page.locator('textarea[name="scope"]').press('CapsLock')
  //   // // Fill textarea:has-text("t")
  //   // await page.locator('textarea:has-text("t")').fill('Testing')
  //   // // Click input[name="effectiveDate"]
  //   // await page.locator('input[name="effectiveDate"]').click()
  //   // // Click [aria-label="May 2\, 2022"]
  //   // await page.locator('[aria-label="May 2\\, 2022"]').click()
  //   // // Click button:has-text("next")
  //   // await page.locator('button:has-text("next")').click()
  //   // // Click text=USD - US Dollar
  //   // await page.locator('text=USD - US Dollar').click()
  //   // // Fill text=CurrencyUSD - US Dollar >> input[type="text"]
  //   // await page
  //   //   .locator('text=CurrencyUSD - US Dollar >> input[type="text"]')
  //   //   .fill('gbp')
  //   // // Click #react-select-6-option-37
  //   // await page.locator('#react-select-6-option-37').click()
  //   // // Click input[name="rate"]
  //   // await page.locator('input[name="rate"]').click()
  //   // // Fill input[name="rate"]
  //   // await page.locator('input[name="rate"]').fill('2000')
  //   // // Click .deel-ui__select.select .deel-ui__select__input-container .deel-ui__select__control >> nth=0
  //   // await page
  //   //   .locator(
  //   //     '.deel-ui__select.select .deel-ui__select__input-container .deel-ui__select__control'
  //   //   )
  //   //   .first()
  //   //   .click()
  //   // // Click #react-select-7-option-3 >> text=Task
  //   // await page.locator('#react-select-7-option-3 >> text=Task').click()
  //   // // Click input[name="customName"]
  //   // await page.locator('input[name="customName"]').click()
  //   // // Press CapsLock
  //   // await page.locator('input[name="customName"]').press('CapsLock')
  //   // // Fill input[name="customName"]
  //   // await page.locator('input[name="customName"]').fill('Test')
  //   // // Click button:has-text("next")
  //   // await page.locator('button:has-text("next")').click()
  //   // // Click button:has-text("next")
  //   // await page.locator('button:has-text("next")').click()
  // }
}

module.exports = { PayAsYouGoContractPage }
