import {lastFocus} from '../main';
import {onEscKeydown} from './../utils/esc-key';
import {body, classListsToggle} from '../modules/nav-btn';

const closeModal = () => {
  classListsToggle();
  body.style.position = 'relative';
  body.style.top = 'auto';
  lastFocus.focus();

  document.removeEventListener('keydown', onEscKeydown);
};

export {closeModal};
