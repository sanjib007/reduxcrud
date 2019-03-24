import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fatchNews = () => async dispatch => {
  const response = await jsonPlaceholder.get("/news");
  dispatch({
    type: "FETCH_NEWS",
    payload: response.data
  });
};

export const fatchAllCountry = () => async dispatch => {
  const response = await jsonPlaceholder.get("/country");
  dispatch({
    type: "FETCH_ALLCOUNTRY",
    payload: response.data
  });
};

export const fatchAllCategory = () => async dispatch => {
  const response = await jsonPlaceholder.get("/category");
  dispatch({
    type: "FETCH_ALLCATEGORY",
    payload: response.data
  });
};
