var FilesPage = require('../Pages/filesPage')
var reusableMethods = require('../AbstractMethods/wrapper');

var HomePage = function(){
    this.NavigateToFilesPage = function(filesPageUrl){        
        reusableMethods.navigate(filesPageUrl);
    }
};
module.exports = new HomePage();