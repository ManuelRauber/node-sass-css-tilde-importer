# node-sass-css-tilde-importer

> A node-sass customer importer which imports CSS files, also supporting tilde syntax to directly import from node_modules directory

## Install

```sh
npm i -D node-sass-css-tilde-importer
```

## Usage

The `.css` extension triggers special behavior in Sass so you cannot import a file with a CSS extension. To work around this, you must use a special prefix on the import string and omit the extension.

```scss
@import "CSS:some_folder/some_css_file"
```

Usage of the module:

```js
const sass = require('node-sass'),
  cssImporter = require('node-sass-css-tilde-importer');

const result = sass.renderSync({ // Alternatively use "render()"
  importer: [cssImporter]
});
```

## Note

Please note, that using `node-sass-css-tilde-importer` does not add generic tilde support for scss files.
If you want to have this as well, you need to import [node-sass-tilde-importer](https://github.com/matthewdavidson/node-sass-tilde-importer) as well.
Luckily, `node-sass-css-tilde-importer` relies on `node-sass-tilde-importer` for tilde support.

```js
const sass = require('node-sass'),
  cssImporter = require('node-sass-css-tilde-importer'),
  tildeImporter = require('node-sass-tilde-importer');

const result = sass.renderSync({ // Alternatively use "render()"
  importer: [tidleImporter, cssImporter]
});
```

How is this different from node-sass-css-importer? Two things are different. The first is the additional tilde support for CSS files.
The second thing is the lack of `importPaths` (e.g. where the plugin automatically searches for css files with the given name).
With the `node-sass-css-tilde-importer` all files need to be references directly.

Please refer to the node-sass [readme](https://github.com/sass/node-sass#readme) for full instruction on how to use custom importers.
