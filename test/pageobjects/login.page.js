const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    // Login's input and button selectors
    get usermail() { return $('#emailInput') }
    get password() { return $('#passInput') }
    get submitBtn() { return $('button[type="submit"]') }

    // Errors and success messages selectors
    get mailAlert() { return $('#invalidMail') }
    get passAlert() { return $('#invalidPass') }
    get succesAlert() { return $('#successMssg') }

    // Redirection to 'login page' button
    get redirectLink() { return $('a') }

    open() {
        return super.open('login');
    }
    submit() {
        this.submitBtn.click()
    }
    redirect() {
        this.redirectLink.click()
    }
}

module.exports = new LoginPage();
