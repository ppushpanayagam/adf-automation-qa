var reusableMethods = require('../AbstractMethods/wrapper');
var data = require('../TestData/testData.json')

var FilesPage = function () {

    this.ClickCreateNewFolderButton = function () {
        reusableMethods.clickByXpath('//mat-icon[contains(text(),"create_new_folder")]');
    }
    this.EnterNewFolderName = function (dat) {
        reusableMethods.enterById('adf-folder-name-input', dat);
    }
    this.ClickCreateButton = function () {
        reusableMethods.clickById('adf-folder-create-button');
    }
    this.ClickCancelButton = function () {
        reusableMethods.clickById('adf-folder-cancel-button');
    }
    this.DeleteCreatedFolder = function (dat) {
       
        element(By.xpath('//span[contains(text(), "'+dat+'")]')).isDisplayed().then(function (bol) {
            if (bol) {
                reusableMethods.clickByXpath('//span[contains(text(), "'+data.Folder_Name+'")]/following::span[5]');
                reusableMethods.clickByXpath('//button[@data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]');
            } else {
                reusableMethods.clickByXpath('//mat-icon[contains(text(), "keyboard_arrow_right")]');
            }
        });
    }

    this.VerifyDuplicateErrorMessage = function (dat) {
        reusableMethods.verifyMessage('//div[@class="cdk-overlay-pane"]/snack-bar-container/simple-snack-bar/span', dat);
        //reusableMethods.verifyMessage('//span[contains(text(),"already a folder with this name. Try a different name.")]', data);
    }
    this.VerifyDeleteMessage = function (dat) {
        reusableMethods.verifyMessage('//span[contains(text(),"'+data.Folder_Name+' deleted")]', dat);
    }
};
module.exports = new FilesPage();