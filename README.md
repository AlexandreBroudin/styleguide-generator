# Node styleguide

## Install
```
npm i node-styleguide
```

## How it works
- For each `.md` files into your `src`
- Convert them to `html` (note that you can change the extension with `distFilesExtensions` for a better match with your environnement)
- Output to `distFolder / distComponentFolder`

## Usage
```js
var styleguide = require('node-styleguide');
styleguide.generate(opts);
```

## Complete example

```
// Base folder

my_project/
  assets/
    css/
      dropdown.css
      modal.css
  styleguide/
    index.html
```

```js
// styleguide.js

var Styleguide = require('../lib/index.js');

var styleguide = new Styleguide({

  /* Folder where your .md files are located
  * Default: 'example/assets/css/' */
  srcFolder: 'example/assets/css/',

  /* Folder where your styleguide is located
  * Default: 'example/styleguide/' */
  distFolder: 'example/styleguide/',

  /* Folder where your components files will be generated
  * Default :'components/' */
  distComponentFolder: 'components/',

  /* Specify your compnents files extension
  * Can be what you want (.html, .hbs, .jade...)
  * But files will only be compiled in .html
  * Default: .html */
  distFilesExtensions: 'html',

  /* Modify each Markdown file before compilation
  * Default: return MardowknStr */
  beforeCompilation: function(MardowknStr){
    return MardowknStr + '\n' + '## License: MIT';
  },

  /* Modify each Markdown file before compilation
  * Default: return HtmlStr */
  afterCompilation: function(HtmlStr){
    return HtmlStr + '<footer>Generated by <a target="_blank" href="https://github.com/onaliugo/node-styleguide">Node-styleguide</a> </footer>';
  }
});

/* Generate it */
styleguide.generate();

```

### Will output
```
my_project/
  assets/
    ...
  styleguide/
    index.html
    components/
      dropdown.html
      modal.html
```
