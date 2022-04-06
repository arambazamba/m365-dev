# Node & Common Tools

[Node.js Versions](https://nodejs.org/en/download/releases/)

[NVM for Windows](https://github.com/coreybutler/nvm-windows)

[Webpack](https://webpack.js.org/)

[Gulp](https://gulpjs.com/)

[Yeoman](https://yeoman.io/)

[Babel](https://babeljs.io/)

[Http-Server](https://github.com/http-party/http-server)

[Json-Server](https://github.com/typicode/json-server)

## Using NPM

[Npm CLI Documentation](https://docs.npmjs.com/cli-documentation/)

```
npm i -g webpack webpack-cli gulp gulp-cli http-server json-server
```

[Npm Audit](https://docs.npmjs.com/cli/audit.html) evaluates possible vulnerabilities

```
npm audit fix
```

![audit](_images/npm-audit.png)

## Execute Sample Tasks

Run a gulp task:

```
gulp babel
gulp compile-sass
```

Run webpack:

```
webpack
```

> Note: Uses `webpack.config.js` by default
