/**
 * Copyright (c) ly-dev12.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const expJSON = require("../../db/experimental.json");

const expListComands = () => {
  expJSON.map((item) => {
    item["comands"].map((cexp) => {
      console.log(cexp);
    });
  });
};

module.exports.expListComands = expListComands;
