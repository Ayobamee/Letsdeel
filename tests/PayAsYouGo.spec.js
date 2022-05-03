//import playwright module and passing attribute test for runner and expect for assertion
const { test, expect } = require('@playwright/test')
//Import page object manager
const { POManager } = require('../pageobjects/POManager')
const dataset = JSON.parse(JSON.stringify(require('../utils/testdata.json')))

//Login test
test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page)
  const loginPage = poManager.getLoginPage()
  const landingPage = poManager.getLandingPage()
  await loginPage.login(dataset.emailAddress, dataset.password)
  await landingPage.assertLogin()
})

// Create Pay as you go contract
test('Create Pay as you go test', async ({ page }) => {
  const poManager = new POManager(page)
  const contractPage = poManager.getContractPage()
  const payasyougoContractPage = poManager.getPayAsYouGoContractPage()
  const createcontractpageUrl = 'https://app.deel.training/create'
  const payasyougopageUrl = 'https://app.deel.training/create/pay-as-you-go'
  await contractPage.createContract()
  await expect(page).toHaveURL(createcontractpageUrl)
  await payasyougoContractPage.openPayasyougoContractPage()
  await expect(page).toHaveURL(payasyougopageUrl)
  await payasyougoContractPage.completeContractCreation()
})
