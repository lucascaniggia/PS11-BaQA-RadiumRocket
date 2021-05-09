const RegisterPage = require('../pageobjects/register.page');

describe('Register form Test - 1', () => {
    it('allow registration given valid fields', () => {
        RegisterPage.open()
        RegisterPage.usermail.setValue('lucascaniggia@gmail.com')
        RegisterPage.username.setValue('Lucas Caniggia')
        RegisterPage.password.setValue('asdasd123')
        RegisterPage.confPassword.setValue('asdasd123')
        RegisterPage.submit()

        browser.pause(1000)
        expect(RegisterPage.mailAlert).not.toBeDisplayed
        expect(RegisterPage.nameAlert).not.toBeDisplayed
        expect(RegisterPage.passAlert).not.toBeDisplayed
        // instead of expect(RegisterPage.successAlert).toHaveText('Your form has been submitted succesfully!')
    });
});

describe('Register form Test - 2', () => {
    it('deny registration given an invalid email', () => {
        RegisterPage.open()
        RegisterPage.usermail.setValue('Lucas')
        RegisterPage.username.setValue('Lucas Caniggia')
        RegisterPage.password.setValue('asdasd123')
        RegisterPage.confPassword.setValue('asdasd123')
        RegisterPage.submit()

        browser.pause(1000)
        expect(RegisterPage.mailAlert).toHaveText('The email address is invalid')
    });
});

describe('Register form Test - 3', () => {
    it('deny registration given an invalid name', () => {
        RegisterPage.open()
        RegisterPage.usermail.setValue('lucascaniggia@gmail.com')
        RegisterPage.username.setValue('Lucas.Caniggia')
        RegisterPage.password.setValue('asdasd123')
        RegisterPage.confPassword.setValue('asdasd123')
        RegisterPage.submit()

        browser.pause(1000)
        expect(RegisterPage.nameAlert).toHaveTextContaining('Your name must contain at least 6 characters')
    });
});

describe('Register form Test - 4', () => {
    it('deny registration given an invalid password', () => {
        RegisterPage.open()
        RegisterPage.usermail.setValue('lucascaniggia@gmail.com')
        RegisterPage.username.setValue('Lucas Caniggia')
        RegisterPage.password.setValue('asd123')
        RegisterPage.confPassword.setValue('asdasd123')
        RegisterPage.submit()

        browser.pause(1000)
        expect(RegisterPage.passAlert).toHaveTextContaining('Your password can only contain letters (a-z A-Z)')
    });
});

describe('Register form Test - 5', () => {
    it('deny registration given an invalid mail and password', () => {
        RegisterPage.open()
        RegisterPage.usermail.setValue('lucascaniggia.com')
        RegisterPage.username.setValue('Lucas Caniggia')
        RegisterPage.password.setValue('asd123')
        RegisterPage.confPassword.setValue('asd123')
        RegisterPage.submit()

        browser.pause(1000)
        expect(RegisterPage.mailAlert).toHaveText('The email address is invalid')
        expect(RegisterPage.passAlert).toHaveTextContaining('Your password can only contain letters (a-z A-Z)')
    });
});

describe('Register form Test - 6', () => {
    it('not matching passwords', () => {
        RegisterPage.open()
        RegisterPage.usermail.setValue('lucascaniggia@gmail.com')
        RegisterPage.username.setValue('Lucas Caniggia')
        RegisterPage.password.setValue('asdasd123')
        RegisterPage.confPassword.setValue('asd123')
        RegisterPage.submit()

        browser.pause(1000)
        expect(RegisterPage.matchPassAlert).toHaveTextContaining('Passwords don\'t match')
    });
});

describe('Register form Test - 7', () => {
    it('check "Clear Fields" button to work correctly', () => {
        RegisterPage.reset()
        browser.pause(1000)

        expect(RegisterPage.usermail).not.toHaveText
        expect(RegisterPage.username).not.toHaveText
        expect(RegisterPage.password).not.toHaveText
        expect(RegisterPage.confPassword).not.toHaveText
    })
});

describe('Register form Test - 8', () => {
    it('check redirection button to work correctly', () => {
        browser.pause(1000)

        expect(RegisterPage.redirectLink).toHaveHref('http://localhost:4000/login.html')
        RegisterPage.redirect()
        browser.pause(2000)
    })
});