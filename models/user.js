const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  artistName: { type: String, default: '' },
  location: { type: String, default: '' },
  artistNumber: { type: String, default: '' },
  independent: { type: String, default: '' },
  shopName: { type: String, default: '' },
  hourlyRate: { type: [Number], default: '' },
  artistMin: { type: [Number], default: '' },
  stylePref: { type: String, default: '' },
  artistInsta: { type: String, default: '' },
  shopLink: { type: String, default: '' },
  artistBio: { type: String, default: '' },
  artistComments: { type: String, default: '' },
  // user info for log-in + tattoo image upload
  // email: { type: String, default: '' },
  // password: { type: String, default: '' },
  // image1: { type: String, default: '' },
  // image2: { type: String, default: '' },
  // image3: { type: String, default: '' },
  date: { type: Date, default: Date.now() }
});

// b cyrpt log-in method
// userSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

const User = mongoose.model('User', userSchema);

module.exports = User;
