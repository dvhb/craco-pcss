# Craco pcss plugin

This plugin add support [PostCss](https://postcss.org/) `*.pcss` file extensions for [create-react-app](https://facebook.github.io/create-react-app/).

## Supported Versions

`craco-pcss` is tested with:

- `react-scripts`: `^2.1.5`
- `@craco/craco`: `^3.5.0`

## Installation

First, follow the [`craco` Installation Instructions](https://github.com/sharegate/craco/blob/master/packages/craco/README.md##installation)
to install the `craco` package, create a `craco.config.js` file, and modify the scripts in your `package.json`.

Then install `craco-pcss`:

```bash
$ npm i @dvhb/craco-pcss

# OR

$ yarn add @dvhb/craco-pcss
```

## Usage

Here is a complete `craco.config.js` configuration file that add supports of `*.pcss` files to `create-react-app`:

```js
const cracoPcss = require('@dvhb/craco-pcss');

module.exports = {
  plugins: [{ plugin: cracoPcss }]
};
```
