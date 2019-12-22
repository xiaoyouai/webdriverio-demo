const { expect } = require("chai");
describe("测试1", () => {
  before(function() {
    browser.openURL("http://v4.webdriver.io/api.html");
  });
  it("查找 leftclick api", () => {
    browser.waitForVisible("/html/body/section/div/section[1]/input");
    $("/html/body/section/div/section[1]/input").setValue("leftclick"); //输入框输入值
    browser.click("/html/body/section/div/section[2]/nav/div[1]/a[6]"); //点击搜索结果
    browser.waitForVisible("/html/body/section/div/section[2]/article/h1");
    let val = browser.getText("/html/body/section/div/section[2]/article/h1");

    expect(val).equal("LEFTCLICK");
  });
});
