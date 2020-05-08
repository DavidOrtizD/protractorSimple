const { firstTest } = require('../globalConfig/globalConfig').pagesUrls;
describe("Chain Locators", () => {
    it("Entering values In a input", () => {
        browser.get(firstTest);
        var firstElement = element(by.model("first"));
        var secondElement = element(by.css(".form-inline [ng-model = 'second']"));
        var goButton = element(by.id("gobutton"));

        firstElement.sendKeys("3");
        secondElement.sendKeys("2");

        goButton.click();

        var resultTable = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText((response) => {
            console.log(response);
        });

        expect(resultTable).toBe("5");

    });

});