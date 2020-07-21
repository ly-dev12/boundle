/**
 * Copyright (c) ly-dev12.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

"use strict";
exports.__esModule = true;
exports.Error = void 0;
var colors_1 = require("colors");
function Error(message, errorCode) {
  return (
    "" +
    (colors_1.red("!Err") +
      "   " +
      colors_1.gray("Boundle net " + errorCode) +
      "   " +
      colors_1.yellow("" + message))
  );
}
exports.Error = Error;
