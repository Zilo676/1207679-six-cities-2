import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.FAVORITES;

const getFavorites = (state) => state[NAME_SPACE].favorites;

export {getFavorites};
