import axios from 'axios';

export default {
  // User API's
  getUsers: function () {
    return axios.get('/api/users');
  },
  getUser: function (id) {
    console.log('~~~~getuser serverside was called~~~~');
    return axios.get('/api/users/' + id);
  },
  updateDonation: function (id, data) {
    return axios.put('/api/users/' + id, data);
  },
  newUser: function (data) {

    return axios.post('/api/users/', data);
  },

  // Comment API's

  createPost: function (data) {
    return axios.post("/api/comments/", data)
  },

  getPosts: function (projectId) {
    return axios.get(`/api/comments/${projectId}`);
  }
};
