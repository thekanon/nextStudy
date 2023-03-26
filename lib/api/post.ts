import axios from 'axios';
import qs from 'qs';
import { DOMAIN_API } from 'commons';

export function addPostAPI(post) {
  return axios.post('/api/set-add-post', post);
}
export function updatePostAPI(post) {
  return axios.post('/api/set-update-post', post);
}
export function deletePostAPI(id) {
  return axios.post('/api/set-delete-post', id);
}
