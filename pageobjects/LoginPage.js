class LoginPage {
  constructor(page) {
    this.page = page
    this.emailAddress = page.locator('[placeholder="Type your email"]')
    this.password = page.locator('input[name="password"]')
    this.signInbutton = page.locator('form button:has-text("log in")')
    this.cookiesButton = page.locator('#CybotCookiebotDialogBodyButtonAccept')
    this.homepageCloseModal = page.locator('.deel-ui__icon-close-1')
  }

  async login(emailAddress, password) {
    //Visit lets deel url
    await this.page.goto('https://app.deel.training')
    //Type email
    await this.emailAddress.type(emailAddress)
    //Type password
    await this.password.type(password)
    //Click sign in button
    await this.signInbutton.click()
    //Click cookies
    await this.cookiesButton.click()
    //Close homepage popup modal
    await this.homepageCloseModal.click()
  }
}

module.exports = { LoginPage }
