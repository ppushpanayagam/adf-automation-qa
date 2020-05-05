var SettingsPage = require('./Pages/settingsPage')
var HomePage = require('./Pages/homePage')
var LoginPage = require('./Pages/loginPage')
var FilesPage = require('./Pages/filesPage')
var data = require('./TestData/testData.json')

describe('ADF Demo App', function () {

  it('test to verify whether user able add new folder and delete it', function () {

    SettingsPage.NavigateToSettingsPage(data.Settings_Page_Url);
    SettingsPage.SelectProvider(data.Provider_As_ECM);
    SettingsPage.ClickApplyButton();
    
    LoginPage.EnterUserName(data.User_Name);
    LoginPage.EnterPassword(data.Password);
    LoginPage.ClickSignInButton();
    browser.sleep(2000);
    
    HomePage.NavigateToFilesPage(data.Files_Page_Url);

    //Files Page: Create a New file
    FilesPage.ClickCreateNewFolderButton();
    FilesPage.EnterNewFolderName(data.Folder_Name);
    FilesPage.ClickCreateButton();
   
    //Files page: Again follow the similar steps to get the error message
    FilesPage.ClickCreateNewFolderButton();
    FilesPage.EnterNewFolderName(data.Folder_Name);
    FilesPage.ClickCreateButton();
    
    //Verifying whether Duplicate error message is displayed or not.
    FilesPage.VerifyDuplicateErrorMessage(data.Folder_Name_Already_Exist_Message);
    
    //Click Cancel Button.
    FilesPage.ClickCancelButton();
   
    // Delete the created file.
    FilesPage.DeleteCreatedFolder(data.Folder_Name);
    
    //Verifying Deleted message is displayed or not
    //FilesPage.VerifyDeleteMessage(data.Folder_Name+' deleted');
  });

});