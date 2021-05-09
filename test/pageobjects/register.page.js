const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {

    // Register's input and button selectors
    get usermail() { return $('#email') }
    get username() { return $('#name') }
    get password() { return $('#pass') }
    get confPassword() { return $('#conf-pass') }
    get submitBtn() { return $('button[type="submit"]') }
    get resetBtn() { return $('button[type="reset"]') }

    // Errors and success messages selectors
    get mailAlert() { return $('#err1') }
    get nameAlert() { return $('#err2') }
    get passAlert() { return $('#err3') }
    get matchPassAlert() { return $('#err4') }
    get succesAlert() { return $('#successMssg') }

    // Redirection to 'login page' button
    get redirectLink() { return $('a') }


    open() {
        return super.open('register');
    }
    submit() {
        this.submitBtn.click()
    }
    reset() {
        this.resetBtn.click()
    }
    redirect() {
        this.redirectLink.click()
    }
}

module.exports = new RegisterPage();