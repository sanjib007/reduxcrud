const initState = {
  newses: [],
  aNews: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return {
        ...state,
        newses: action.payload
      };
    case "FETCH_NEWPOST":
      return {
        ...state,
        aNews: action.payload
      };
    default:
      return state;
  }
};
