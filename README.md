
<p align="left">
    <a href="https://github.com/jhwohlgemuth/voxelcss"><img width="300px" alt="voxelcss" src="https://raw.githubusercontent.com/jhwohlgemuth/voxelcss/master/media/voxelcss_with_letters.png"/></a>
</p>

> [Voxel.css](http://www.voxelcss.com/) with updated architecture, robust tests, and npm availability

[![npm](https://img.shields.io/npm/v/voxelcss.svg)](https://www.npmjs.com/package/voxelcss)
[![Build Status](https://travis-ci.org/jhwohlgemuth/voxelcss.svg?branch=master)](https://travis-ci.org/jhwohlgemuth/voxelcss)
[![Build status](https://ci.appveyor.com/api/projects/status/y9imj7j6x1ptva5o/branch/master?svg=true)](https://ci.appveyor.com/project/jhwohlgemuth/voxelcss/branch/master) 
[![Coverage Status](https://coveralls.io/repos/github/jhwohlgemuth/voxelcss/badge.svg?branch=master)](https://coveralls.io/github/jhwohlgemuth/voxelcss?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/jhwohlgemuth/voxelcss/badges/score.svg)](https://www.bithound.io/github/jhwohlgemuth/voxelcss)
[![Known Vulnerabilities](https://snyk.io/test/github/jhwohlgemuth/voxelcss/badge.svg)](https://snyk.io/test/github/jhwohlgemuth/voxelcss)

Installation
------------

```bash
npm install voxelcss
```

> **Note:** The associated styles are [bundled with the JavaScript](https://github.com/jhwohlgemuth/voxelcss/blob/master/lib/index.js#L3) and [added into the head section at runtime](https://github.com/cheton/browserify-css#autoinject).

Usage
-----

**AMD (Require.js)**
> Add to [paths attrbute of requirejs config file](http://requirejs.org/docs/api.html#config-paths) and require in code

```js
// config.js
requirejs.config({
    paths: {
        voxelcss: 'path/to/node_modules/voxelcss/dist/voxelcss'
    }
});

// main.js
define(function(require) {
    'use strict';
    const Voxelcss = require('voxelcss');
});
```

**Browser global**
> Add script tag to your html (code will be available via `window.voxelcss`)

```html
<!DOCTYPE html>
<html lang="en">
    <head>...</head>
    <body>
        <script src="path/to/node_modules/voxelcss/dist/voxelcss.js"></script>
    </body>
</html>
```

Examples
--------
> Under construction

Features
--------
- Completely compatible with [voxel.css](https://github.com/HunterLarco/voxel.css)
- JavaScript and CSS are all bundled together into one file!
- CSS is processed by [cssnext](http://cssnext.io/) and minified with [cssnano](http://cssnano.co/) to provide auto-prefixed styles with a minimal footprint and maximum compatibility.
- Code functionality is verified by tests written using [Jest](https://facebook.github.io/jest/)
- Code standards are enforced by [ESLint](http://eslint.org/)
- Functionality and standards are enforced locally and on remote CI servers (including visual regression tests)!

Contributing
------------
> Under construction

**Setup**

```bash
# clone repository
git clone git@github.com/jhwohlgemuth/voxelcss.git
cd voxelcss
# install project dependencies
npm install
# verify voxelcss installed correctly by running tests
npm test
# to use the "design" and "dev" tasks, install browser-sync and stmux, respectively
npm install  browser-sync stmux --global
```

**Workflow Tasks**
- `npm run dev` *run test and lint tasks in watch mode using [stmux](https://github.com/rse/stmux)*
- `npm test` *run tests*
- `npm run test:watch` *run tests (watch mode)*
- `npm run lint` *lint code*
- `npm run lint:watch` *lint code (watch mode)*
- `npm run design` *open browser to see "live" changes*

Roadmap
-------
- Follow progress on [Trello](https://trello.com/b/Q3sVE18k/voxelcss)

Credits
-------
- [Hunter Larco](http://hunterlarco.com/)  *created Voxel.css*
- [Robert Jowett](http://www.dafont.com/percy-pixel.font?fpp=100&l%5B%5D=10&l%5B%5D=1&text=voxelcss) *created the font used in the logo*
- [Browserify](http://browserify.org/) *module bundling*
- [Babel](https://babeljs.io/) *ES6 transpiling and minification*
- [JSDoc](http://usejsdoc.org/) *documentation generation*
- [minami](https://github.com/Nijikokun/minami) *documentation theme*

License
-------
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjhwohlgemuth%2Fvoxelcss.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjhwohlgemuth%2Fvoxelcss?ref=badge_large)
