import {FETCH_POSTS, NEW_POST, LATEST_POSTS} from './types';

export const fetchPosts = () => dispatch => {
  fetch ('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json ())
    .then (posts =>
      dispatch ({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};

export const latestPosts = () => dispatch => {
  fetch ('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json ())
    .then (news =>
      dispatch ({
        type: LATEST_POSTS,
        payload: news,
      })
    );
};

export const createPost = postData => dispatch => {
  fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify (postData),
  })
    .then (res => res.json ())
    .then (post =>
      dispatch ({
        type: NEW_POST,
        payload: post,
      })
    );
};
