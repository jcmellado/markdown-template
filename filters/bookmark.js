// Copyright (c) 2020, Juan Mellado. All rights reserved. Use of this
// source is governed by a MIT-style license found in the LICENSE file.

const filters = module.exports;

filters.bookmarks = () =>
  new Map();

filters.bookmark = (heading, bookmarks, section, subsection) => {
  if (bookmarks.has(section)) {
    bookmarks.get(section).set(subsection, heading);
  } else {
    bookmarks.set(section, new Map([[subsection, heading]]));
  }

  return heading;
};

filters.bookmarked = (subsection, bookmarks, section) =>
  bookmarks.get(section).get(subsection);
