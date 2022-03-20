import {closeModal} from './close-modal';
import {pageHeader} from '../modules/nav-btn';

const navLinks = pageHeader.querySelectorAll('.nav__link');

const onNavLinkClick = () => {
  if (pageHeader.classList.contains('page-header--modal')) {
    closeModal();
  }
};

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', onNavLinkClick);
});
