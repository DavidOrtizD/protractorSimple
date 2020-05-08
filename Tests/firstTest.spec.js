const { firstTest } = require('../globalConfig/globalConfig').pagesUrls;

describe("First learning test", () => {
    it("Entering values In a input", () => {
        browser.get(firstTest);
        var firstElement = element(by.model("first"));
        var secondElement = element(by.css(".form-inline [ng-model = 'second']"));

        firstElement.sendKeys("3").then(() => {
            browser.sleep(5000);
        });

        secondElement.sendKeys("2").then(() => {
            browser.sleep(5000);
        });

        firstElement.getAttribute('value').then((val) => {
            console.log(val);
            expect(val).toBe("3");
        });

        var valueFristElement = firstElement.getAttribute('value');
        var valueSecondElement = secondElement.getAttribute('value');

        expect(valueFristElement).toBe("3");
        expect(valueSecondElement).toBe("2");

    });

    it("Entering values and click on the button to get a value", () => {
        browser.get(firstTest);
        var firstElement = element(by.model("first"));
        var secondElement = element(by.css(".form-inline [ng-model = 'second']"));
        var goButton = element(by.id("gobutton"));
        var resultField = element(by.css(".form-inline .ng-binding"))

        expect(firstElement).toBeTruthy();

        firstElement.sendKeys("3");

        secondElement.sendKeys("2");

        var valueFristElement = firstElement.getAttribute('value');

        var valueSecondElement = secondElement.getAttribute('value');

        expect(valueFristElement).toBe("3");
        expect(valueSecondElement).toBe("2");

        goButton.click();

        var valueresultField = resultField.getText();

        expect(valueresultField).toBe("5");

    });
});