/**
 * Copyright (c) ly-dev12.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const fs = require("fs");
const cmd = require("child_process");
const rute = require("path");
const colors = require("colors");
const { Sucess } = require("./utils/sucess");
const { Error } = require("./utils/error");
const { Install } = require("./utils/install");

const createBoundle = async (path, carpetNamePkg, tools) => {
  const FilterUndefined = tools.filter((item) => item !== undefined);
  console.log(
    colors.bgYellow(
      colors.black("[installing the following list of dependencies:]")
    ),
    FilterUndefined
  );
  if (FilterUndefined.length >= 0) {
    let i = 0;

    //
    await fs.mkdir(path, (err) => {
      if (err)
        console.log(
          Error("Ups, there was a problem creating this folder", 404)
        );
      else console.log(Sucess(`The Boundle ${carpetNamePkg} has been create`));
    });
    //
    let plus = 0;
    //
    const rutePath = await rute.join(
      __dirname,
      `../boundles/${carpetNamePkg}`
    );
    //console.log(rutePath)
    var json = await cmd.exec(`cd ${rutePath}` && `npm init -y`, {
      cwd: rutePath,
    });
    json.stdout.on("data", (data) => {
      console.log(data);
    });

    while (i < FilterUndefined.length) {
      const getPkg = FilterUndefined[i];

      var comand = await cmd.exec(`cd ${rutePath}` && `npm i ${getPkg}`, {
        cwd: rutePath,
      });

      if (plus == 0) {
        const msgInstall = comand.stdout.on("data", (data) => {
          return Install(FilterUndefined);
        });
        comand.stdout.on("data", (data) => console.log(data));
        comand.on("exit", () => {
          console.log(Install(FilterUndefined));
        });
      }

      //await cmd.get(`npm uninstall ${getPkg}`, (err, data) => console.log(data));
      plus++;
      i++;
    }
  } else {
    console.log(Error("There are no packages to install", 1234));
  } // ven a bound-cli.js
};

module.exports = {
  createBoundle,
};
