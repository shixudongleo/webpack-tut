# webpack-tut
webpack features code

## Why Webpack

modern frontend web development can't run directly on browser:

- new JavaScript language feature need transpile to run on old browsers
- new CSS language(Sass/Less) needs to be tranlate to CSS
- new HTML language(pug) need to tranlate to HTML

webpack help to imporve browser campatibility, optimize performance for code running in browser
- postcss (autoprefixer)

## Webpack Concepts

- build tool: build tool compile web project to code that can directly service by web engine(like nginx, mainly html/css/js/img/...)
- [dependency graph](https://webpack.js.org/concepts/dependency-graph/): file dependency in the web project, starting from an entry file. 
- [webpack module](https://webpack.js.org/concepts/modules/): webpack module consider all types of files in web project, e.g. js (es6 `import` statement, commonjs `require` statement), css (sass `@import`), image( `url(...)` or `<img src=...>`), data(`import` json,csv,etc)
- module bundler: 
- Chunk:


Webpack 5 key concepts:

- entry: the starting point of the dependency graph. webpack analyzes code from here.
- output: the directory and file name of the build artifects
- loader: webpack only has support for .js/.json files by default. loader help to process non-js files, including: css(sass/less), static files(image/font), data(csv/...), transform them into **modules**. This allows you to bundle any static resources beyond JavaScrip
- plugins: each plugin deals with one task in the building process(e bundle optimization, asset management, ...), html-webpack-plugin (bind existing html template with building css/js/image/... assets)
- mode: `development`, `production` mode, produce building product optimized for each environment.

Question:

- if build vue project with webpack, which file is the entry point? and how does the dependency graph look like?


## Webpack CLI

webpack-cli provides a quick and easy binary for compile web project. 
entry file, output folder, mode, etc.

https://webpack.js.org/api/cli/

```
$ webpack ./src/index.js -o ./build --mode=development
```
