/**
 * Copyright (c) ly-dev12.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const comands = require("../tools/utils/comands");
const { Error } = require("../tools/utils/error");
const fs = require("fs");
const path = require("path");
const cmd = require("child_process");
//const { inquirer } = require("../tools/utils/arrive");     // 808 ERROR CODE
const { createBoundle } = require("../tools/process-create-boundle");
//const { guess } = require("../tools/utils/guessed");  // 808 ERROR CODE
const props = require("../db/tool.json");
const fileSystem = require("../tools/utils/fs-extra.js");
const { colors } = require("../tools/utils/arrive");
const { help } = require("../tools/utils/help");
const { expListComands } = require("../tools/utils/exp");
const { Sucess } = require("../tools/utils/sucess");
const { Console } = require("console");

// Principal variable
const argv = process.argv[2];

async function argvsComprober(argument) {
  if (
    argument !== comands.comands[0] &&
    argument !== comands.comands[1] &&
    argument !== comands.comands[2] &&
    argument !== comands.comands[3] &&
    argument !== comands.comands[4] &&
    argument !== comands.comands[5] &&
    argument !== comands.comands[6] &&
    argument !== comands.comands[7] &&
    argument !== comands.comands[8] &&
    argument !== comands.comands[9] &&
    argument !== comands.comands[10] &&
    argument !== comands.comands[11]
  ) {
    console.log(
      Error(
        "The argument " +
          argument +
          " is not register in Boundle, Please type run command --help",
        456
      )
    );
  } else if (argument == comands.comands[0]) {
    var carpetNamePkg = process.argv[3];
    if (!carpetNamePkg) {
      console.log(Error("Please enter the name of the package to create", 756));
      return false;
    }

    if (!process.argv[4]) {
      console.log(Error("You have to install at least one dependency", 423));
      return false;
    }

    if (
      fs.existsSync(`${path.join(__dirname, "../boundles/" + carpetNamePkg)}`)
    ) {
      console.log(
        Error(
          "The Boundle " +
            carpetNamePkg +
            " already exist please enter other name",
          1800
        )
      );
    } else {
      let i = 4;
      //
      let arrayPkages = [];
      do {
        const argvs = process.argv[i];
        arrayPkages.push(argvs);
        i++;
      } while (i < 34);
      //

      //
      //const xd = await inquirer.prompt({
      //    name: 'pkjson',
      //    message: 'Do you want to create a packaje.json?',
      //    default: 'Y',
      //    type: 'confirm'
      //});
      //if(xd.pkjson == true){
      //    const quez = await guess(carpetNamePkg);
      //    await createPackage(carpetNamePkg, quez["name-pkg"], quez.version, quez.desc, quez.entry, quez.test, quez.git, quez.keys, quez.auth, quez.lics, arrayPkages);
      //}
      //

      //console.log(arrayPkages);
      //console.log(comands.comands[5]);
      createBoundle(
        `${path.join(__dirname, "../boundles/" + carpetNamePkg)}`,
        `${carpetNamePkg}`,
        arrayPkages
      );
    }
    //console.log(comands.comands[5]);
  } else if (argument == comands.comands[2]) {
    const carpetName = process.argv[3];
    if (process.argv[4]) {
      console.log(
        Error(colors.bgYellow(colors.black("This method not have 4 args")), 742)
      );
      return false;
    }
    const direcArray = [];
    const file = cmd.exec("echo %cd%");
    //console.log(file);
    file.stdout.on("data", (data) => {
      const xd = data.toString();
      const arayder = [];
      arayder.push(data);
      //console.log(arayder);
      //const x64_path = modifiArray.replace('\\', "/");
      const modifiArray = arayder.join("\\").replace(/\\/g, "/").split("\r"); // Regex for remove "\" symbol
      if (
        fs.existsSync(`${path.join(__dirname, `../boundles/${carpetName}`)}`)
      ) {
        //const pathResoler = modifiArray.toString();
        fileSystem.fs_2.copy(
          `${path.join(__dirname, `../boundles/${carpetName}`)}`,
          modifiArray[0],
          (err, data) => {
            if (err)
              console.log(
                Error(`Could not import files to destination folder`, 345)
              );
            else
              console.log(
                `${
                  colors.green("[Imported successfully]: ") +
                  colors.cyan(
                    `Package "${carpetName}" has been successfully imported into "${modifiArray[0]}"`
                  )
                }`
              );
          }
        );
      } else {
        console.log(
          Error(
            `The package with the name "${carpetName}" does not exist.`,
            245
          )
        );
      }
    });
    //console.log(direcArray);
  } else if (argument == comands.comands[3]) {
    if (process.argv[4]) {
      console.log(
        Error(colors.bgYellow(colors.black("This method not have 4 args")), 742)
      );
      return false;
    }
    const deleteArgvName = process.argv[3];
    const rutename = path.join(__dirname, `../boundles/${deleteArgvName}`);
    if (fs.existsSync(rutename)) {
      fs.rmdir(rutename, { recursive: true }, (err) => {
        if (err) console.log(Error("Not deleted err", 34));
        else
          console.log(
            msgCompleted(
              `It was completely removing the "${deleteArgvName}" package`
            )
          );
      });
    } else {
      console.log(Error("Not found path", 0));
      return false;
    }
  } else if (argument == comands.comands[9]) {
    const cameDirToExtend = process.argv[3];
    const pathFolderExtend = path.join(
      __dirname,
      `../boundles/${cameDirToExtend}`
    );
    if (!fs.existsSync(pathFolderExtend)) {
      console.log(
        Error(
          `Can not add because ${colors.bgCyan(
            colors.black(`"` + cameDirToExtend + `"`)
          )} does not exist`,
          755
        )
      );
      return false;
    }
    if (!cameDirToExtend || !process.argv[4]) {
      console.log(Error("Arguments missing", 1990));
      return false;
    }
    let i = 4;
    let deps = []; // thia array have deps of argvs
    while (i < 20) {
      deps.push(process.argv[i]);
      i++;
    }
    const reduceUndefineds = deps.filter((item) => item !== undefined);
    console.log(colors.gray("Adding: "), reduceUndefineds);

    let e = 0;
    while (e < reduceUndefineds.length) {
      const packet = reduceUndefineds[e];
      var add = await cmd.exec(`cd ${pathFolderExtend}` && `npm i ${packet}`, {
        cwd: pathFolderExtend,
      });
      e++;
    }

    add.stdout.on("data", (data) => {
      console.log(data);
    });

    add.on("exit", () => {
      console.log(
        Sucess(` Added "${reduceUndefineds}" to "${cameDirToExtend}"`)
      );
      return false;
    });
  } else if (argument == comands.comands[10]) {
    if (process.argv[3]) {
      console.log(Error("This command does not need any more arguments", 742));
      return false;
    }

    const pather = path.join(__dirname, "../boundles");
    fs.readdir(pather, (err, data) => {
      if (err) throw new Error(err);
      else console.log(colors.cyan("\tYour Boundles: \n"));
      //console.log(data)

      //console.log(data.length > 0)
      if (data.length > 0) {
        let i = 0;
        while (i < data.length) {
          console.log("\t" + colors.yellow(data[i]) + "\n");
          i++;
        }
      } else {
        console.log(
          "\t\t" + "Oops it looks like you don't have packages created" + "\n"
        );
        return false;
      }
    });
  } else if (argument == comands.comands[11]) {
    const accessToPath = process.argv[3];
    //console.log(accessToPath);
    if (!accessToPath) {
      console.log(Error("arguments are missing", 1990));
      return false;
    }

    const pathToAcess = path.join(__dirname, `../boundles/${accessToPath}`);
    if (!fs.existsSync(pathToAcess)) {
      console.log(Error("Dont found this folder", 755));
      return false;
    }

    if (!process.argv[4]) {
      console.log(Error("Not more args", 742));
      return false;
    }

    let i = 4;
    let arayUDeps = [];
    while (i < 20) {
      arayUDeps.push(process.argv[i]);
      i++;
    }
    //console.log(arayUDeps)
    const leftUInDepsArray = arayUDeps.filter((item) => item !== undefined);
    console.log(
      colors.bgYellow(colors.black("Removing the following dependencies: ")),
      leftUInDepsArray
    );
    let a;
    for (a = 0; a < leftUInDepsArray.length; a++) {
      let uninstallDep = leftUInDepsArray[a];
      var apUninstall = await cmd.exec(
        `cd ${pathToAcess}` && `npm uninstall ${uninstallDep}`,
        { cwd: pathToAcess }
      ); // child process + npm u ${pakages}
    }

    apUninstall.stdout.on("data", (data) => {
      console.log(data);
    });

    apUninstall.on("exit", () => {
      console.log(
        Sucess(
          `It is delimiting the following dependencies: ${colors.gray(
            leftUInDepsArray
          )} of package ${accessToPath}`
        )
      );
      return false;
    });
  } else if (argument == comands.comands[4] || argument == comands.comands[5]) {
    props.map((item) => {
      console.log(item["Name"] + item["version"]);
    });
  } else if (argument == comands.comands[6] || argument == comands.comands[7]) {
    help();
  } else if (argument == comands.comands[8]) {
    expListComands();
  }
}

const msgCompleted = (msg) => {
  return `${colors.cyan("[Completed]: " + colors.gray(msg))}`;
};

argvsComprober(argv);
