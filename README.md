# Express ES6 Boilerplate

### Features:
- [Express.js](https://expressjs.com/) as the web framework.
- ES2017+ support with [Babel](https://babeljs.io/).
- Development with Gulp(http://gulpjs.com/).
- Automatic polyfill requires based on environment with [babel-preset-env](https://github.com/babel/babel-preset-env).
- Linting with [ESLint](http://eslint.org/).
- Testing with [Jest](https://facebook.github.io/jest/).


## Basic APIs

| METHOD | URI | Purpose |
| ------ | --- | ------- |
| `POST` | /api/auth/signup | Signup |
| `POST` | /api/auth/login | Login |


## Getting started

```sh
# Clone the project
git clone git@github.com:the6thm0nth/express-es6-boilerplate.git
cd express-es6-boilerplate

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# or if you're using Yarn
yarn
```

_If you don't use [Yarn](https://yarnpkg.com/) you can just replace `yarn` with `npm` in the commands that follow._

Then you can begin development:

```sh
gulp
# yarn run dev
```

## License
MIT License. See the [LICENSE](LICENSE) file.

## Forked from
https://github.com/vmasto/express-babel
