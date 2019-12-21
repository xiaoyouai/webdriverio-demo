const { expect } = require("chai");
describe("百度测试", () => {
  before(function() {
    browser.openbaidu();
  });
  it("打开百度", () => {
    expect(1).equal(1);
  });
});
