class LoginPage {
  constructor(page) {
    this.page = page
    this.userName = page.locator('[placeholder*="Email"]')
    this.password = page.locator('[placeholder*="Password"]')
    this.signInbutton = page.locator('button:has-text("Login")')
  }

  async login(username, password) {
    await this.page.goto('https://admin-stg.liveet.co')
    await this.userName.type(username)
    await this.password.type(password)
    await this.signInbutton.click()
  }
}

module.exports = { LoginPage }
