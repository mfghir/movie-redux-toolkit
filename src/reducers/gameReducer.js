const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upComing: action.payload.upComing,
        newGames: action.payload.newGames,
      };

    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };

    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };

    default:
      return { ...state };
  }
};

export default gamesReducer;
