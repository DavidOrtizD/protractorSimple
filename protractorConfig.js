const { commonPath } = require("./globalConfig/globalConfig");

console.log(commonPath);
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        commonPath + 'demo.spec.js',
        commonPath + 'firstTest.spec.js',
        commonPath + 'chainLocators.spec.js',
    ]
};