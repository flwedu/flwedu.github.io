"use strict";
const loadFromJson = (filePath, cb) => {
  fetch(filePath)
    .then((res) => res.json())
    .then(cb)
    .catch(console.error);
};
