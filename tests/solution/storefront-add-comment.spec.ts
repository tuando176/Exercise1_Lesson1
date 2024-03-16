import test, { expect } from "@playwright/test";

test("comment and approve", async ({ page }) => {
  // Comment
  await page.goto("https://shop.congcu.org/")
  await page.locator("//a[normalize-space()='Kinh Nghiệm Chọn và Thưởng Thức Bia Độc Đáo Trên Toàn Thế Giới']").click()
  await page.locator("//textarea [@id='comment'] ").fill("Bia ngon 12345")
  await page.locator("//input [@id='author']").fill("Phong Do")
  await page.locator("//input [@id='email']").fill("phongdo@gmail.com")
  await page.locator("//input [@id='url']").fill("K4-Automation")
  await page.locator("//input [@id='submit']").click()

  // Approve
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

  await page.locator("//a[@href='edit-comments.php']").first().click();

  await page.locator("//li[@class='moderated']//a").click();

  await page.locator("//tr[@id and contains(normalize-space(), 'comment_3') and contains(normalize-space(), 'vinhvo1')]//p").hover();

  await page.locator("//tr[@id and contains(normalize-space(), 'comment_3') and contains(normalize-space(), 'vinhvo1')]//span[@class='approve']//a").click();
});


