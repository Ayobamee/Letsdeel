const { expect } = require('@playwright/test')

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
    const randomChar = (length) => {
      let result = ''
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        )
      }
      return result
    }

    await this.organizerModule.click()
    await this.addOrganizerButton.click()
    await this.organizerNameInputField.type(organizerName + randomChar(4))
    await this.organizerEmailInputField.type(
      organizerEmail + randomChar(2) + '@test.com'
    )
    await this.organizerPhoneNoInputField.type(organizerPhoneNo)
    await this.organizerAddressInputField.type(organizerAddress)
    await this.organizerUsernameInputField.type(
      organizerUsername + randomChar(2)
    )
    await this.organizerPasswordInputField.type(organizerPassword)
    await this.createOrganizerButton.click()
  }

  async assertOrganizerCreation() {
    await expect(this.successfulOrganizerCreationToastMessage).toBeVisible()
  }
}

module.exports = { LandingPage }
