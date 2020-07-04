// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const filters = module.exports;

filters.toc = (params) => {
  const slateEnabled = params['slate.enabled'] === 'true';
  const headingLevel = parseInt(params['tocHeadingLevel'], 10);
  const levels = [];

  return {
    slateEnabled: slateEnabled,
    headingLevel: headingLevel,
    levels: levels,
  };
};

filters.heading = (text, toc, level) => {
  if (toc.slateEnabled) {
    return text;
  }

  if (toc.levels.length < level) {
    toc.levels.push(1);
  } else {
    toc.levels[level - 1]++;
    toc.levels.fill(0, level);
  }

  const number = toc.levels.slice(0, level).join('.');

  return `${number}. ${text}`;
};
