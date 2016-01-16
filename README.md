This repo is a starter kit for front-end developer, so developers can easily start a new project without setting up everything all over again.

There is two versions that would suit everyone: one is very basic that contain index.html and essential bootstrap files, another contain index.html, essential bootstrap files and gulp with SCSS compiler and BrowserSync.

This is also friendly for new users who want to start using Gulp as part of your development flow. See the beginning guide on the bottom of readme. 

To request a new version and feature or report a bug, please open an issue and I'll take a look at it.

### bootstrap
* `assets/css/bootstrap.min.css`
* `assets/js/jquery.1.11.3.min.js`
* `assets/js/bootstrap.min.js`
* `index.html`

### bootstrap-scss-gulp
* `assets/css/bootstrap.min.css`
* `gulp/gulpfile.js`
* `assets/js/jquery.1.11.3.min.js`
* `assets/js/bootstrap.min.js`
* `assets/scss/main.scss`
* `index.html`

Gulp has the following tasks:
* BrowserSync (automatically refresh working files in browser on save)
* SASS/SCSS compiler (automatically compiles SCSS to CSS on save)
* Plumber (prevents gulp crash on SASS/SCSS error)

##### 1. CD to a directory 'gulp' containing `gulpfile.js`
##### 2. Install dependencies
```
npm install
```

##### 3. Start compiling, serving, and watching files
```
gulp
```

---

### For gulp beginners:

#####1. Terminal
You need terminal to use npm and gulp. Terminal is available out of the box on Linux and OS X. 

Windows has it as well but cmd and PowerShell is not sustainable for development work. I recommend you to install [cmder](http://cmder.net/) as a replacement for Windows terminal and use their custom cmd.exe (`cmd /k "%ConEmuDir%\..\init.bat"` instead of default PowerShell). If you have runtime error when starting cmder, you'll probably need to install VS 2015, see [the issue here](https://github.com/cmderdev/cmder/issues/501). 

Learn terminal basics [here](http://cli.learncodethehardway.org/book/), this will help you in long run.

#####2. npm
Install [npm](https://nodejs.org/en/download/). This is available for all operating system. During the installation for Windows, be sure 'add to PATH' is included ([image](http://i.imgur.com/lHiNR7p.png)). When installed, restart cmder and enter `npm` in terminal to see if it's working properly, as in it should tell you the usage information. If it does, proceed to the next step.

#####3. gulp
Install gulp globally with this terminal command: `npm install --global gulp`

On completion, download this repo and extract bootstrap-scss-gulp to any folder. Follow the instruction in bootstrap-scss-gulp section on this readme.
