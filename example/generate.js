var styleguide = require('../lib/index.js');

styleguide.generate({
  baseFolder: 'example/assets/css/',
  distFolder: 'example/styleguide/',
  distComponentFolder: 'components/',
  distFilesExtensions: '.html',

  beforeCompilation: function(MardowknStr){

    /* Add MIT License */

    var licenseStr = "## License: MIT";
    
    return MardowknStr + '\n' + licenseStr;
  },

  afterCompilation: function(HtmlStr){
    /* Add a footer */

    var footerStr = '<footer>Generated by <a target="_blank" href="https://github.com/onaliugo/node-styleguide">Node-styleguide</a> </footer>';

    return HtmlStr + footerStr;
  }
});