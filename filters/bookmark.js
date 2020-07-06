// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const filters = module.exports;

filters.bookmarks = (heading, section, subsection) => {
  if (this.folders === undefined) {
    this.folders = new Map();
  }

  let folder = this.folders.get(section);

  if (folder === undefined) {
    folder = new Map();
    this.folders.set(section, folder);
  }

  if (folder.has(subsection)) {
    return folder.get(subsection);
  }

  folder.set(subsection, heading);

  return heading;
};
