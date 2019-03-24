export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALLCATEGORY":
      return action.payload;
    default:
      return state;
  }
};
