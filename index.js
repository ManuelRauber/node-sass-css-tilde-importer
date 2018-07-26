const fs = require('fs'),
  tildeImporter = require('node-sass-tilde-importer');

module.exports = (url, prev, done) => {
  if (url.slice(0, 4) !== 'CSS:') {
    return done();
  }

  let cssPath = url.slice(4);

  if (cssPath[0] === '~') {
    cssPath = tildeImporter(cssPath, prev).file;
  }

  cssPath += '.css';

  if (!fs.existsSync(cssPath)) {
    return done(new Error(`Specified CSS file not found: ${cssPath} referenced from ${prev}`));
  }

  fs.readFile(cssPath, (err, data) => {
    if (err) {
      return done(err);
    }

    done({ contents: data.toString() });
  });
};
