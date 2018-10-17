const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSessionSchema = new Schema({
  userID: {
    type: Number,
    default: -1
  },
  timeStamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const UserSession = mongoose.model('UserSession', userSessionSchema);

module.exports = UserSession;
