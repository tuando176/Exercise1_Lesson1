import test, { expect } from "@playwright/test";

test("login success", async ({ page }) => {
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
  await expect(welcomeMessageLoc).toHaveText("Welcome to WordPress!")
});

test("login failed", async ({ page }) => {
  // Goto login page
  await page.goto("https://shop.congcu.org/wp-login.php")

  // Fill username
  await page.locator("//input[@id='user_login']").fill("admin");

  // Fill password
  await page.locator("//input[@id='user_pass']").fill("%R4d$Jeafptxxxt");

  // Click login button
  await page.locator("//input[@id='wp-submit']").click();

  // Verify error message: "Error: The password you entered for the username admin is incorrect. Lost your password?"
  const errorMsgBlockLoc = page.locator("//div[@id='login_error']");
  await expect(errorMsgBlockLoc).toBeVisible();
});

test("logout", async ({ page }) => {
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

  // Verify welcome message: "Welcome to WordPress!"
  const welcomeMessageLoc = page.locator("//div[@class='welcome-panel-header']//h2");
  await expect(welcomeMessageLoc).toHaveText("Welcome to WordPress!")

  // Hover on admin bar
  await page.locator("//li[@id='wp-admin-bar-my-account']").hover();

  // Verify logout link is visible
  const logoutLinkLoc = page.locator("//li[@id='wp-admin-bar-logout']");
  await expect(logoutLinkLoc).toBeVisible();

  // Click logout link
  await logoutLinkLoc.click();

  // Verify logout success: "You are now logged out."
  const loginMessageLoc = page.locator("//div[@id='login-message']");
  await expect(loginMessageLoc).toHaveText("You are now logged out.");
});


