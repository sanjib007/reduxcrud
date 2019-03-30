import { concat } from "rxjs";

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
      }; //action.payload;
    case "FETCH_NEWPOST":
      console.log("new news", action.payload);
      return {
        ...state,
        aNews: action.payload,
        newses: action.payload
      };
    default:
      return state;
  }
};
