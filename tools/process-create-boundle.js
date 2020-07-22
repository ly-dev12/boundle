/**
 * Copyright (c) ly-dev12.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const fs = require("fs");
const cmd = require("child_process");
const rute = require('path');
const colors = require("colors");
const { Sucess } = require("./utils/sucess");
const { Error } = require("./utils/error");
const { Install } = require("./utils/install");

const createBoundle = async (path, carpetNamePkg, tools) => {
  const nameFolder = carpetNamePkg;
  const pathFolder = path;
  console.log(pathFolder)
  if(fs.existsSync(pathFolder)){
    console.log(Error(`The package with the name "${nameFolder}" already exists, please choose another name`, 1800))
    return false;
  }

  if(!tools){
    console.log(Error("Arguments are needed", 1990));
    return false;
  }

  fs.mkdir(pathFolder, (err) => {
    if (err) console.log(Error("Ups, there was a problem creating this folder", 404))
    else
    console.log(Sucess(`The Boundle ${nameFolder} has been create`));
  })

  var package = await cmd.exec(`cd ${pathFolder}` && `npm init -y`, {cwd: pathFolder})

  package.stdout.on('data', (data) => {
    console.log(data)
  })

  const splitUndefined = tools.filter((item) => item !== undefined)
  console.log(splitUndefined);

  let i = 0;
  let plus = 0;
  while(i < splitUndefined.length){
    const getPkg = splitUndefined[i];

    var createe = await cmd.exec(`npm i --prefix ${pathFolder} ${getPkg}`, {
      cwd: pathFolder
    });
    i++;
  }

  createe.stdout.on('data', (data) => console.log(data))
  createe.on('exit', () => {
    console.log(Install(splitUndefined));
  })

  return false;
}

module.exports = {
  createBoundle,
};
