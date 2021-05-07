const LoginPage = require('../pageobjects/login.page');

describe('Login form Test - 1', () => {
    it('allow access given a valid email', () => {
        LoginPage.open()
        LoginPage.username.setValue('lucascaniggia@gmail.com')
        LoginPage.password.setValue('asdasd123')
        LoginPage.submit()

        browser.pause(1000)
        expect(LoginPage.mailAlert).not.toBeDisplayed
        expect(LoginPage.passAlert).not.toBeDisplayed
        // expect(LoginPage.successAlert).toHaveText('Your form has been submitted succesfully!')
    });
});

describe('Login form Test - 2', () => {
    it('deny acces given an invalid email', () => {
        LoginPage.open()
        LoginPage.username.setValue('Lucas')
        LoginPage.password.setValue('asdasd123')
        LoginPage.submit()

        expect(LoginPage.mailAlert).toHaveText('The email address is invalid')
    });
});

describe('Login form Test - 3', () => {
    it('deny acces given an invalid password', () => {
        LoginPage.open()
        LoginPage.username.setValue('lucascaniggia@gmail.com')
        LoginPage.password.setValue('asd123')
        LoginPage.submit()

        expect(LoginPage.passAlert).toHaveTextContaining('Your password can only contain letters (a-z, A-Z)')
    });
});