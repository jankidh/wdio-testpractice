import { expect, browser, $ } from '@wdio/globals'
import pageElements from '../pageElements/loginPage.json'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

// Login with credential
        await $(pageElements.username).setValue('tomsmith')
        await $(pageElements.password).setValue('SuperSecretPassword!')
        await $(pageElements.loginButton).click()

//Successfull login 
        await expect($(pageElements.flashMessage)).toBeExisting()
        await expect($(pageElements.flashMessage)).toHaveText(
            expect.stringContaining('You logged into a secure area!')) 

        await expect($(pageElements.logoutButton)).toBeExisting()
        await expect($(pageElements.logoutButton)).toHaveText(
                expect.stringContaining('Logout'))

// Click Logout and verify message and redirect
              
        await $(pageElements.logoutButton).click()
        await expect($(pageElements.flashMessage)).toBeExisting()
        await expect($(pageElements.flashMessage)).toHaveText(
                expect.stringContaining('You logged out of the secure area!'))
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login')

// poweredby Link on login page
        await expect($(pageElements.poweredByLink)).toBeExisting()
        await $(pageElements.poweredByLink).click()
        // await expect(browser).toHaveUrl('https://elementalselenium.com/')
        // await expect(browser).toHaveTitle('Elemental Selenium')          

     // await expect($('#flash')).toMatchElementSnapshot('flashAlert')
    //  await browser.debug()
        console.log("Login, Logout, Powered by link test")
    })
    .timeout(10*60000)
})

