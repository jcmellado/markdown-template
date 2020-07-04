// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const fs = require('fs');

const hooks = module.exports;

hooks['generate:after'] = (generator) => {
  const output = generator.templateParams.output;
  if (output !== 'asyncapi.md') {
    const oldPath = `${generator.targetDir}/asyncapi.md`;
    const newPath = `${generator.targetDir}/${output}`;
    fs.renameSync(oldPath, newPath);
  }
};
