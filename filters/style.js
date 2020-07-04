// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const filters = module.exports;

filters.bold = (text) =>
  `**${text}**`;

filters.italic = (text) =>
  `*${text}*`;

filters.link = (url, text = url) =>
  `[${text}](${url})`;

filters.reference = (title, text = title) =>
  `[${text}](#${title.toLowerCase().replace(/\s/g, '-')})`;

filters.email = (url, text = url) =>
  `[${text}](mailto:${url})`;

filters.code = (text) =>
  `\`${text}\``;

filters.listItem = (text, indent) =>
  `${'    '.repeat(indent - 1)}* ${text}`;

filters.br = (text) =>
  `${text}<br />`;

filters.lf = (value) =>
  `${value}  `;
