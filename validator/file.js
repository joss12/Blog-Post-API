const validateExtension = (ext) => {
  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".webp") {
    return true;
  } else {
    return false;
  }
};

module.exports = { validateExtension };
