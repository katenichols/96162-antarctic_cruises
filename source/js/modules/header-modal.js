import {closeModal} from './close-modal';
import {pageHeader} from './nav-btn';
// import {anchors} from './anchors';
import {pageHeaderWrapper, pageHeaderOverlay} from './nav-btn';

export const navLinks = pageHeader.querySelectorAll('[data-nav-link]');
const focusables = pageHeader.querySelectorAll('[data-nav-link], [data-nav-btn');
const firstFocusable = focusables[0];
const lastFocusable = focusables[focusables.length - 1];

const onNavLinkClick = () => {
  if (pageHeader.classList.contains('page-header--modal')) {
    closeModal();
  }
};

firstFocusable.focus();

document.addEventListener('keydown', (evt) => {
  if (pageHeaderWrapper.classList.contains('page-header__wrapper--modal')) {
    if (evt.key === 'Tab') {
      if (evt.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          evt.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          evt.preventDefault();
        }
      }
    }
  }
});

document.addEventListener('click', (evt) => {
  if (pageHeaderOverlay.classList.contains('page-header__overlay--modal')) {
    if (evt.target !== pageHeaderWrapper && !pageHeaderWrapper.contains(evt.target) && evt.target !== ('[data-nav-link]')) {
      closeModal();
    }
  }
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', onNavLinkClick);
});
