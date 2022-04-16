const { expect } = require('@playwright/test')
const {
  randomcharacterGenerator,
} = require('../utils/randomcharacterGenerator')
const Randomchar = new randomcharacterGenerator()

class LandingPage {
  constructor(page) {
    this.successfulLoginMessage = page.locator('text=Login successful')
    this.liveetDashboard = page.locator('span:has-text("Dashboard")')
    this.organizerModule = page.locator('span:has-text("Organizer")')
    this.eventManagerModule = page.locator('text=Event Manager')
    this.eventPlanTransactionModule = page.locator(
      'text=Event Plan Transactions'
    )
    this.paymentModule = page.locator('text=Payments')
    this.turnstileModule = page.locator('text=Turnstile')
    this.usersModule = page.locator('span:has-text("Users")')
    this.faceVerificationModule = page.locator('text=Face Verification')
    this.activityLogModule = page.locator('text=Activity Log')
    this.eventConfigModule = page.locator('text=Event Config')
    this.reportModule = page.locator('text=Report')
    this.adminModule = page.locator('span:has-text("Admin")')
    this.addOrganizerButton = page.locator('text=Add Organizer')
    this.organizerNameInputField = page.locator(
      '[placeholder="Enter Organizer name"]'
    )
    this.organizerEmailInputField = page.locator('[placeholder="Enter email"]')
    this.organizerPhoneNoInputField = page.locator(
      '[placeholder="Enter Phone number"]'
    )
    this.organizerAddressInputField = page.locator(
      'textarea[name="orgAddress"]'
    )
    this.organizerUsernameInputField = page.locator('[placeholder="Username"]')
    this.organizerPasswordInputField = page.locator('[placeholder="Password"]')
    this.createOrganizerButton = page.locator('text=Create Organizer')
    this.successfulOrganizerCreationToastMessage = page.locator(
      'text=Created successfully'
    )
    this.createEventButton = page.locator('text=Create Event')
    this.selectOrganizationDropdown = page.locator(
      'select[name="organiser_id"]'
    )
    this.eventName = page.locator('[placeholder="Name here"]')
    this.eventCalendar = page.locator('[placeholder="Select Date and Time "]')
    this.selectparticularDay = page.locator('td:nth-child(7)')
    this.eventLocationField = page.locator('[placeholder="Enter a location"]')
    this.eventDescriptionField = page.locator('textarea[name="event_desc"]')
    this.eventTypeButton = page.locator('text=Public')
    this.eventPaymentTypeButton = page.locator('text=Free')
  }

  async assertLogin() {
    await expect(this.successfulLoginMessage).toBeVisible()
    await expect(this.liveetDashboard).toBeVisible()
    await expect(this.organizerModule).toBeVisible()
    await expect(this.eventManagerModule).toBeVisible()
    await expect(this.eventPlanTransactionModule).toBeVisible()
    await expect(this.paymentModule).toBeVisible()
    await expect(this.turnstileModule).toBeVisible()
    await expect(this.usersModule).toBeVisible()
    await expect(this.faceVerificationModule).toBeVisible()
    await expect(this.activityLogModule).toBeVisible()
    await expect(this.eventConfigModule).toBeVisible()
    await expect(this.reportModule).toBeVisible()
    await expect(this.adminModule).toBeVisible()
  }

  async createOrganizer(
    organizerName,
    organizerEmail,
    organizerPhoneNo,
    organizerAddress,
    organizerUsername,
    organizerPassword
  ) {
    await this.organizerModule.click()
    await this.addOrganizerButton.click()
    await this.organizerNameInputField.type(
      organizerName + Randomchar.randomChar(4)
    )

    await this.organizerEmailInputField.type(
      organizerEmail + Randomchar.randomChar(2) + '@test.com'
    )
    await this.organizerPhoneNoInputField.type(organizerPhoneNo)
    await this.organizerAddressInputField.type(organizerAddress)
    await this.organizerUsernameInputField.type(
      organizerUsername + Randomchar.randomChar(2)
    )
    await this.organizerPasswordInputField.type(organizerPassword)
    await this.createOrganizerButton.click()
  }

  async assertOrganizerCreation() {
    await expect(this.successfulOrganizerCreationToastMessage).toBeVisible()
  }

  async createEvent(eventName) {
    await this.eventManagerModule.click()
    await this.createEventButton.click()
    await this.selectOrganizationDropdown.click()
    await this.selectOrganizationDropdown.selectOption('91')
    await this.eventName.type(eventName + Randomchar.randomChar(2))
    await this.eventCalendar.click()
    await this.selectparticularDay.first().click()
    await this.eventLocationField.click()
    await this.eventLocationField.type('Magodo')
    await this.eventDescriptionField.type('Automated Testing')
    await this.eventTypeButton.click()
    await this.eventPaymentTypeButton.click()
  }
}

module.exports = { LandingPage }
