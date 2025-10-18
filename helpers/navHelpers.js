export const login = async() => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

// Login with credential
        await $(pageElements.username).setValue('tomsmith')
        await $(pageElements.password).setValue('SuperSecretPassword!')
        await $(pageElements.loginButton).click()

//Successfull login 
        await expect($(pageElements.flashMessage)).toBeExisting()
}