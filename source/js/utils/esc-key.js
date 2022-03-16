const escKey = (evt) => {
  if ((evt.key === 'Escape' ||
    evt.key === 'Esc')) {
    return true;
  }
};

export { escKey };
