import { FETCH_POSTS, NEW_POST,DELETE_POST, UPDATE_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  fetch('http://localhost:5000/api/productes')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('http://localhost:5000/api/productes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const deleteData = id =>dispatch =>{
axios
.delete(`http://localhost:5000/api/productes/${id}`)
.then(res => 
  dispatch ({
    type: DELETE_POST,
    payload:id
  })
  )
}

export const updateData = data =>dispatch =>{
  console.log("updateAction",data);
  fetch(`http://localhost:5000/api/productes/${data._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(post =>
    dispatch({
      type: UPDATE_POST,
      payload: post
    })
  );
  }