import {onEscKeydown} from './../utils/esc-key';
import {classListsToggle} from '../modules/nav-btn';

const closeModal = () => {
  classListsToggle();

  document.removeEventListener('keydown', onEscKeydown);
};

export {closeModal};
