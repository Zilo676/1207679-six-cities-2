const initialState = {
  comments: [],
  isBlock: false
};

const ActionType = {
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  SET_BLOCK: `SET_BLOCK`,
};

const ActionCreator = {
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };
  },
  setBlock: (status) => {
    return {
      type: ActionType.SET_BLOCK,
      payload: status
    };
  }
};

const Operation = {
  loadComments: (hotelId) => (dispatch, _getState, api) => {
    return api.get(`/comments/${hotelId}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      })
      .catch(() => {});
  },

  sendComment: (hotelId, rating, comment, {onFail, onSucc}) => (dispatch, _getState, api) => {
    dispatch(ActionCreator.setBlock(true));
    return api.post(`/comments/${hotelId}`, {
      rating,
      comment,
    })
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
        dispatch(ActionCreator.setBlock(false));
        if (onSucc) {
          onSucc();
        }

      })
      .catch((err) => {
        dispatch(ActionCreator.setBlock(false));
        if (onFail) {
          onFail(err.message);
        }
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload,
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
