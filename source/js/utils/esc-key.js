const escKey = (evt) => {
  if ((evt.key === 'Escape' ||
    evt.key === 'Esc')) {
    return true;
  } else {
    return false;
  }
};

export {escKey};
