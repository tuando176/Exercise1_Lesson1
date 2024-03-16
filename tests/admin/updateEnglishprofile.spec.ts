import test, { expect } from "@playwright/test";

test("login  with EN", async ({ page }) => {
    // Goto  login page
    await page.goto("https://shop.congcu.org/wp-login.php")
    //selectlanguage
    await page.locator("//select[@id='language-switcher-locales']").selectOption({
        value: "en_US"
    });
    

    //click btn
    await page.locator("//input[@value='Thay đổi']").click();
    
    // Fill username
    await page.locator("//input[@id='user_login']").fill("admin");

    // Fill password
    await page.locator("//input[@id='user_pass']").fill("%R4d$Jeafp");

    // Check remember me
    await page.locator("//input[@id='rememberme']").check();

    // Click login button
    await page.locator("//input[@id='wp-submit']").click();
    // await page.waitForTimeout(5000)

    //click button User 
    await page.locator("//li[@id='menu-users']").hover();
    await page.locator("//a[@href='profile.php']").click();

    // Get selected language
    const currentLanguage = await page.locator("//select[@id='locale']//option[@selected]").textContent();

    // Verify admin!"
    const ChaoAdminLoc = page.locator("//li[@id='wp-admin-bar-my-account']/a");
    const en_text = "Howdy, admin";
    const vn_text = "Chào, admin";

    if ( currentLanguage === "English (United States)" ) {
        await expect(ChaoAdminLoc).toHaveText(en_text);

    } else {
        await expect(ChaoAdminLoc).toHaveText(vn_text);
        await page.locator("//select[@id='locale']").selectOption({
            value:"" 
        });
    };

    // await page.locator("//select[@id='locale']").selectOption({
    //      value:"" 
    // });

    await page.locator("//input[@id='submit']").click();

    // // Verify Profile updated!
    const ProfileUpdatedLoc = page.locator("//div[@id='message']//strong");
    await expect(ProfileUpdatedLoc).toHaveText("Profile updated.");
    await page.close();

})
