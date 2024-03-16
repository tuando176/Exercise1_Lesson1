import test, { expect } from "@playwright/test";

test("login  with EN", async ({ page }) => {
    // Goto  login page
    await page.goto("https://shop.congcu.org/wp-login.php");
    
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
    await page.waitForTimeout(5000)
    // Verify welcome message: Welcome to WordPress!
    const welcomeMessageLoc = page.locator("//div[@class='welcome-panel-header']//h2");
    await expect(welcomeMessageLoc).toHaveText("Welcome to WordPress!")
})
