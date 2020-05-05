var reusableMethods = require('../AbstractMethods/wrapper');
var LoginPage = require('../Pages/loginPage')
var settingsPage = function(){
    this.NavigateToSettingsPage = function(pageURL) {
       return reusableMethods.navigate(pageURL);       
    }
    this.SelectProvider = function(data){
        reusableMethods.selectDropdown('//mat-select[@id="adf-provider-selector"]/div/div[2]/div', '//span[contains(text(), "'+data+'")]');
    }
    this.ClickApplyButton = function(){
        reusableMethods.clickById('host-button');
    }
};
module.exports = new settingsPage();