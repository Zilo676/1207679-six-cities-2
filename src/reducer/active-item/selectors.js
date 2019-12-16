import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.ACTIVE_ITEM;

const getActiveItem = (state) => {
  return state[NAME_SPACE].activeItem;
};

export {
  getActiveItem,
};
