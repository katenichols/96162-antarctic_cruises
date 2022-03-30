import {navLinks} from './header-modal';

for (let anchor of navLinks) {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
