var reusableMethods = function(){
    this.navigate = function(baseURL){ 
        browser.get(baseURL);
    }
    this.selectDropdown = function(arrowLocator, locator){
        element(By.xpath(arrowLocator)).click();
        element(By.xpath(locator)).click();
    }
    this.clickById = function(locator){
        element(By.id(locator)).click();
    }
    this.clickByXpath = function(locator){
        element(By.xpath(locator)).click();
    }
    this.enterById = function(locator, data){
        element(By.id(locator)).sendKeys(data);
    }
    this.enterByXpath = function(locator, data){
        element(By.xpath(locator)).sendKeys(data);
    }
    this.verifyMessage = function(locator, data){
        element(By.xpath(locator)).isDisplayed().then(function(bol){
            if(bol){
                console.log('Element is displayed');
                element(By.xpath(locator)).getText().then(function(text){
                expect(text).toBe(data);
                });
            }else{
                console.log('Element is not displayed');
            }
        });
    }
};
module.exports = new reusableMethods();