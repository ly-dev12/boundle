/**
 * Copyright (c) ly-dev12.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

colors = require("colors");

const Success = (mesage) => {
  return `${colors.green("[Process Success]:") + colors.cyan(`${mesage}`)}`;
};

module.exports.Sucess = Success;
