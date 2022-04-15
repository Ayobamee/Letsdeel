//import playwright module and passing attribute test for runner and expect for assertion
const { test } = require('@playwright/test')
//Import page object manager
const { POManager } = require('../pageobjects/POManager')
const dataset = JSON.parse(JSON.stringify(require('../utils/testdata.json')))

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page)
  const loginPage = poManager.getLoginPage()
  const landingPage = poManager.getLandingPage()

  await loginPage.login(dataset.username, dataset.password)
  await landingPage.assertLogin()
})

test('Create Organizer test', async ({ page }) => {
  const poManager = new POManager(page)

  const landingPage = poManager.getLandingPage()

  await landingPage.createOrganizer(
    dataset.organizerName,
    dataset.organizerEmail,
    dataset.organizerPhoneNo,
    dataset.organizerAddress,
    dataset.organizerUsername,
    dataset.organizerPassword
  )
  await landingPage.assertOrganizerCreation()
})
