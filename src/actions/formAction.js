import {GET_POSTS,ADD_POST} from './types';

export const getOrder = () => dispatch => {
    console.log("form Action");
    //api call
    fetch('http://xxx:5000/api/order')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: GET_POSTS,
          payload: posts
        })
      );
  };

  export const AddPost = data => dispatch => {
    console.log("Inside Action..",data);
    //api call
      fetch('http://xxx:5000/api/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: ADD_POST,
          payload: data
        })
      );
  };
  
