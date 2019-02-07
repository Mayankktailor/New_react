import { FETCH_POSTS, NEW_POST, DELETE_POST,UPDATE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
    console.log("GET Reducer");      
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
    console.log("POST Reducer");      
      return {
        item: action.payload,
        ...state
      };
      case DELETE_POST:
      console.log("DELETE Reducer");      
      return{
        ...state,
        items: state.items.filter(item =>item._id !== action.payload)
      }
      case UPDATE_POST:
      console.log("UPDATE Reducer");      
      return{
        ...state
        }

      default:
      return state;
  }
}
