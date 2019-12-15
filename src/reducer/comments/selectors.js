import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.COMMENTS;

const getComments = (state) => state[NAME_SPACE].comments;

export {getComments};
