This repo is a starter kit for front-end developer, so developers can easily start a new project without setting up everything all over again. 

There is two versions that would suit everyone: one is very basic that contain essential bootstrap files, and another is essential bootstrap files and gulp with SCSS compiler, browsersync and plumber. Both versions have bare minimal `index.html`.

## Bootstrap
* `bootstrap.min.css`
* `jquery.1.11.3.min.js`
* `bootstrap.min.js`
* `index.html`

## Bootstrap-SCSS-Gulp
* `bootstrap.min.css`
* `jquery.1.11.3.min.js`
* `bootstrap.min.js`
* `main.scss`
* `index.html`

And following Gulp tasks:
* BrowserSync
* SASS/SCSS compiler
* Plumber to prevent gulp crash on SASS/SCSS error

##### 1. CD to a directory 'gulp' containing `gulpfile.js`
##### 2. Install Dependencies
```
npm install
```

##### 3. Start compiling, serving, and watching files
```
gulp
```
