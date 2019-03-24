export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALLCOUNTRY":
      return action.payload;
    default:
      return state;
  }
};
