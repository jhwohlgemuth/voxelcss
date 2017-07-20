
<p align="center" style="text-align: center;width: 100%;">
    <img width="50%" alt="applied.js" src="./media/voxelcss_with_letters.png"/>
</p>
</br>

> [Voxel.css](http://www.voxelcss.com/) with updated architecture, easier contributing, and npm availability.

[![npm](https://img.shields.io/npm/v/voxelcss.svg)](https://www.npmjs.com/package/voxelcss)
[![Build Status](https://travis-ci.org/jhwohlgemuth/voxelcss.svg?branch=master)](https://travis-ci.org/jhwohlgemuth/voxelcss)
[![Coverage Status](https://coveralls.io/repos/github/jhwohlgemuth/voxelcss/badge.svg?branch=master)](https://coveralls.io/github/jhwohlgemuth/voxelcss?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/jhwohlgemuth/voxelcss/badges/score.svg)](https://www.bithound.io/github/jhwohlgemuth/voxelcss)
[![Known Vulnerabilities](https://snyk.io/test/github/jhwohlgemuth/voxelcss/badge.svg)](https://snyk.io/test/github/jhwohlgemuth/voxelcss)

Installation
------------

[![Greenkeeper badge](https://badges.greenkeeper.io/jhwohlgemuth/voxelcss.svg)](https://greenkeeper.io/)

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
- JavaScript and CSS are all bundled together into one file!
- Completely compatible with [voxel.css](https://github.com/HunterLarco/voxel.css)
- CSS is processed by [cssnext](http://cssnext.io/) and minified with [cssnano](http://cssnano.co/) to provide auto-prefixed styles with a minimal footprint and maximum compatibility.
- Code functionality is verified by tests written using [Jest](https://facebook.github.io/jest/) and code standards are enforced by [ESLint](http://eslint.org/) (all run locally and on remote CI servers)

Contributing
------------
> Under construction

**Workflow Tasks**
- `npm run dev` *run test and lint tasks in watch mode using [stmux](https://github.com/rse/stmux)*
- `npm test` *run tests*
- `npm run test:watch` *run tests (watch mode)*
- `npm run lint` *lint code*
- `npm run lint:watch` *lint code (watch mode)*
- `npm run demo` *open browser to demo code*

Roadmap
-------
- Follow progress on [Trello](https://trello.com/b/Q3sVE18k/voxelcss)

Credits
-------
- [Hunter Larco](http://hunterlarco.com/)  *created Voxel.css*
- [Robert Jowett](http://www.dafont.com/percy-pixel.font?fpp=100&l%5B%5D=10&l%5B%5D=1&text=voxelcss) *created the font used in the logo*

License
-------
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjhwohlgemuth%2Fvoxelcss.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjhwohlgemuth%2Fvoxelcss?ref=badge_large)
