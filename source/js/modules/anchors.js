const anchors = document.querySelectorAll('.nav__link');

for (let anchor of anchors) {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
