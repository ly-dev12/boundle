/**
 * Copyright (c) ly-dev12.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const colors = require("colors");

const Install = (pkg) => {
  return `${colors.green("[Sucess Install Pkg´s]: ") + colors.cyan(pkg)}`;
};

module.exports.Install = Install;
