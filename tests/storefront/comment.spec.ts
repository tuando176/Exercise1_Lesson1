import test, { expect } from "@playwright/test";

test(" add comment",async ({ page }) => {
    // go to page
    await page.goto("https://shop.congcu.org/");

    // click vào bài viết đầu tiên
    await page.locator("//a[text()='Kinh Nghiệm Chọn và Thưởng Thức Bia Độc Đáo Trên Toàn Thế Giới']").click();

    // add bình luận
    await page.locator("//textarea[@id='comment']").fill("TuanDo");

    // add tên
    await page.locator("//input[@id='author']").fill("TuanDo");

    //add email
    await page.locator("//input[@id='email']").fill("dhtuan1@tma.com.vn");

    // add trang web
    await page.locator("//input[@id='url']").fill("facebook.com");

    // checkbox
    await page.locator("//input[@id='wp-comment-cookies-consent']").check();

    // click on phản hồi btn
    await page.locator("//input[@id='submit']").click();

    //verify cmt
    const blockCmtLoc = page.locator("//em[text()='Bình luận của bạn đang chờ phản hồi.']");
    await expect(blockCmtLoc).toBeVisible();
});