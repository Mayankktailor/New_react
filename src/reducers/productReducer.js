import { GET_POSTS, ADD_POST } from "../actions/types";

const initialState = {
  products: [],
  item:{}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      console.log("GET Product Reducer");
      return {
        ...state,
        products: action.payload
      };
      case ADD_POST:
    console.log("ADD_POST Reducer");      
      return {
        item: action.payload,
        ...state
      };      
    default:
      return state;
  }
}
