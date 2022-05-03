//import playwright module and passing attribute test for runner and expect for assertion
const { test, expect } = require('@playwright/test')
//Import page object manager
const { POManager } = require('../pageobjects/POManager')
const dataset = JSON.parse(JSON.stringify(require('../utils/testdata.json')))

//Login
test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page)
  const loginPage = poManager.getLoginPage()
  const landingPage = poManager.getLandingPage()
  await loginPage.login(dataset.emailAddress, dataset.password)
  await landingPage.assertLogin()
})

test('Create Fixed Contract test', async ({ page }) => {
  const poManager = new POManager(page)
  const contractPage = poManager.getContractPage()
  const fixedContractPage = poManager.getFixedContractPage()
  const createcontractpageUrl = 'https://app.deel.training/create/fixed'
  await contractPage.createContract()
  await fixedContractPage.OpenFixedContractPage()
  await expect(page).toHaveURL(createcontractpageUrl)
  await fixedContractPage.completeContractCreation()
})
