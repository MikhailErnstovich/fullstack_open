import axios from 'axios'
const baseUrl = '/api/persons'

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then(res => res.data)
}
const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(res => res.data);
}
const update = (id, data) => {
  const request = axios.put(`${baseUrl}/${id}`, data);
  return request.then(res => res.data);
}
export default {
  create,
  remove,
  update
}