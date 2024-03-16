import test from "@playwright/test";

test("Comment", async ({ page }) => {
    
    await page.goto("https://shop.congcu.org/");
    await page.locator("//a[text()='Kinh Nghiệm Chọn và Thưởng Thức Bia Độc Đáo Trên Toàn Thế Giới']").click();
    await page.locator("//textarea[@id='comment']").fill("TuanDo say: Uống bia ra đường công an tóm cổ");
    await page.locator("//input [@id='author']").fill("TuanDo");
    await page.locator("//input [@id='email']").fill("dhtuan1@tma.com.vn");
    await page.locator("//input [@id='url']").fill("facebook.com");
    await page.locator("//input[@id='wp-comment-cookies-consent']").check();
    await page.locator("//input[@id='submit']").click();
})

test("Comment and Approved", async ({ page }) => {
    await page.goto("https://shop.congcu.org/wp-login.php")
    await page.locator("//input[@id='user_login']").fill("admin");
    await page.locator("//input[@id='user_pass']").fill("%R4d$Jeafp");
    await page.locator("//input[@id='rememberme']").check();
    await page.locator("//input[@id='wp-submit']").click();
    // await page.locator("(//a[@href='edit-comments.php'])[1]").click()
    // await page.locator("//p[normalize-space()='Bia ngon 12345']/following-sibling::div[@class='row-actions']//span[@class='approve']").click()
    await page.locator("//a[@href='edit-comments.php']").click();
    await page.locator("//tbody[@id='the-comment-list']//p[text()='TuanDo say: Uống bia ra đường công an tóm cổ']").hover();
    await page.locator("//tr[[@id='comment-74']//p[text()='TuanDo'] and //span/a[@role='button']")

})
