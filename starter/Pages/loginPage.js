var reusableMethods = require('../AbstractMethods/wrapper');
var HomePage = require('../Pages/homePage');

var LoginPage = function(){
    this.EnterUserName = function(data){
        reusableMethods.enterById('username', data);
    }
    this.EnterPassword = function(data){
        reusableMethods.enterById('password', data);
    }
    this.ClickSignInButton = function(){
        reusableMethods.clickById('login-button');
    }
};
module.exports = new LoginPage();

