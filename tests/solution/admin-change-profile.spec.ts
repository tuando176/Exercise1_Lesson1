import test, { expect } from "@playwright/test";

test("change language", async ({ page }) => {
  // Goto  login page
  await page.goto("https://shop.congcu.org/wp-login.php")

  // Fill username
  await page.locator("//input[@id='user_login']").fill("admin");

  // Fill password
  await page.locator("//input[@id='user_pass']").fill("%R4d$Jeafp");

  // Check remember me
  await page.locator("//input[@id='rememberme']").check();

  // Click login button
  await page.locator("//input[@id='wp-submit']").click();

  // Verify welcome message: "Xin chào! Bạn đã đăng nhập vào khu vực Quản trị của WordPress!"
  const welcomeMessageLoc = page.locator("//div[@class='welcome-panel-header']//h2");
  await expect(welcomeMessageLoc).toHaveText("Xin chào! Bạn đã đăng nhập vào khu vực Quản trị của WordPress!")

  await page.locator("//a[@href='users.php']").first().click();

  await page.locator("//a[@href='profile.php']").click();

  await page.locator("//select[@name='locale']").selectOption({
    label: "English (United States)",
  });

  await page.locator("//input[@id='submit']").click();
});


