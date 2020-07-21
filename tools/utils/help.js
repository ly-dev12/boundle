/**
 * Copyright (c) ly-dev12.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const dataJSONDB = require("../../db/tool.json");
const colors = require("colors");

const helpComandPrint = () => {
  dataJSONDB.map((item) => {
    item["comands"].map((cmd) => {
      const matrizData = JSON.stringify(cmd).split(",");
      console.log(`\t\t${colors.bgGreen(colors.black("Use: "))}\n`);
      console.log(
        `\t\t${colors.cyan(
          "boundle " + colors.yellow("<comand> " + colors.cyan("args..."))
        )}\n`
      );
      console.log(`\t${colors.bgYellow(colors.black("Comands:"))}\n`);
      for (var i = 0; i < matrizData.length; i++) {
        console.log(
          "\t" +
            matrizData[i]
              .replace("{", "")
              .replace("}", "")
              .replace('"', "")
              .replace('"', "")
              .replace('"', "")
              .replace('"', "") +
            "\n"
        );
      }
    });
  });
};

module.exports.help = helpComandPrint;
