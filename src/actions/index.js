import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";
export const CREATE_USER = "FETCH_USER";
export const DELETE_USER = "DELETE_USER";

export function fetchUsers() {
  const request = axios.get(`http://www.mocky.io/v2/5b32475f34000011003fd374`);
  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function createUser(values, callback) {
  const request = axios.post(`/post`, values).then(() => callback());
  return {
    type: CREATE_USER,
    payload: request
  };
}
export function deleteUser(id, callback) {
  const request = axios.post(`/post/${id}`).then(() => callback());
  return {
    type: CREATE_USER,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`/post/${id}`);

  return {
    type: DELETE_USER,
    payload: request
  };
}
