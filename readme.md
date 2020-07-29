# Boundle
<div align="center">
    <img src="https://i.imgur.com/2km0DuI.png" width="250px" height="250px" />
</div>

[![covergae status](https://badgen.net/npm/license/lodash)](Coverage)
[![Version Status](https://img.shields.io/badge/version-1.0.0-brightgreen)](Version)
[![Deps](https://img.shields.io/badge/dependencies-5-yellow)](Dependencis)
[![Status Code](https://img.shields.io/badge/Status-Sucess-success)](Status)
<br>
<br>

## What is boundle?

Boundle is a tool designed to create custom packages, with the modules that you want to install, there are no limits, the advantage that boundle gives you is that when you already have that package with dependencies inside you do not have to reinstall the dependencies, you can simply reuse that package with those dependencies calling them, we better go with practice.

---
## Install
You need to install boundle globally.
```js
npm i -g boundle-net
```

### Ready...

---

## How to use
To use boundle first there will be a terminal in your project directory.

## Commands

- <h2>create</h2> 
This command is used to create a new package with the dependencies that you want.<br>
`` Well, with this we would already have a package and its dependencies.``  <br>
`Example:` boundle create <strong>"pkgName"</strong> dependencies...
```cmd
C:\Users\USER\Desktop>boundle create webpack express method-override bcrypt body-parser 
```
<img src="images/create.PNG" width="750px">

- <h2>usage</h2>
To use this command first go to the directory where you want the package to be copied, then run it like this. <br>
`Example:` boundle usage <strong>"pkgName"</strong>
```cmd
C:\Users\USER\Desktop\tester>boundle usage webpack
```
<img src="images/usage.PNG" width="750px">


- <h2>list</h2>
The list command outputs the list of all the packages you have created. <br>
`Example:` boundle list
```cmd
C:\Users\USER\Desktop>boundle list
```
<img src="images/list.PNG" width="250px">

- <h2>delete</h2>
The delete command deletes a package with the specific name passed to it by parameter. <br>
`Example:` boundle delete <strong>"pkgName"</strong>
```cmd
C:\Users\USER\Desktop>boundle delete webpack
```
<img src="images/delete.PNG">

- <h2>extend</h2>
This command is used to add more dependencies to an already created package. <br>
`Example:` boundle extend <strong>"pkgName"</strong> dependencies...
```cmd
C:\Users\USER\Desktop>boundle extend webpack mongoose node-fetch
```
<img src="images/extend.PNG" width="450px" height="150px">

- <h2>reduce</h2>
The reduce command is used for when we want to uninstall a dependency from our package.<br>
`Example:` boundle reduce <strong>"namePkg"</strong> dependencies...
```cmd
C:\Users\USER\Desktop>boundle reduce webpack express mongoose
```
<img src="images/reduce.PNG" width="550px">

---

## Other Commands

- <h2>cexp</h2>
This command removes all the commands that are in experimental version. <br>
`Example:` boundle cexp
```cmd
C:\Users\USER\Desktop>boundle cexp
```
<img src="images/cexp.PNG">

- <h2>--version</h2>
This command brings out the latest version of boundle.<br>
`Example:` boundle --version | -v
```cmd
C:\Users\USER\Desktop>boundle --version
or
C:\Users\USER\Desktop>boundle -v
> output
Boundle V1.0.0
```

- <h2>--help</h2>
The --help command as its name says gives you a help to guide you. <br>
`Example:` boundle --help | -h
```cmd
C:\Users\USER\Desktop>boundle --help
or
C:\Users\USER\Desktop>boundle -h
```
<img src="images/help.PNG" width="450px">

---

Developer: ly-dev12
<br>
Repository: https://github.com/ly-dev12/boundle
<br>
Npm: https://www.npmjs.com/package/boundles

---

### Contributing

contributions are welcome, create a pull request and send us your feature, first check the [CONTRIBUTING GUIDELINES](CONTRIBUTING.md).

### [LICENSE MIT](https://opensource.org/licenses/MIT)

<div align="center">
<img src="https://i.imgur.com/2km0DuI.png" width="250px">
<div>