const db = require('../models');
// const bcrypt = require('bcryptjs');

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // former email/log-in set up
  // leoCreate: function(req, res) {
  //   let { email, password } = req.body;

  // if (!email) {
  //   return res.send({
  //     success: false,
  //     message: 'Error: Email cannot be blank.'
  //   });
  // }
  // if (!password) {
  //   return res.send({
  //     success: false,
  //     message: 'Error: Password cannot be blank.'
  //   });
  // }
  // email = email.toLowerCase();
  // email = email.trim();

  // db.User.find(
  //   {
  //     email: email
  //   },
  //   (err, previousUsers) => {
  //     if (err) {
  //       return res.send({
  //         success: false,
  //         message: 'Error: Server error'
  //       });
  //     } else if (previousUsers.length > 0) {
  //       return res.send({
  //         success: false,
  //         message: 'Error: Account already exist.'
  //       });
  //     }
  //   }
  // );

  // Save the new user
  //   db.User.create({
  //     email,
  //     password: bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
  //   }).then(newUser => {
  //     res.send({ newUser });
  //   });
  // },
  // signin: function(req, res) {
  //   const { body } = req;
  //   const { password } = body;
  //   let { email } = body;
  //   if (!email) {
  //     return res.send({
  //       success: false,
  //       message: 'Error: Email cannot be blank.'
  //     });
  //   }
  //   if (!password) {
  //     return res.send({
  //       success: false,
  //       message: 'Error: Password cannot be blank.'
  //     });
  //   }
  //   email = email.toLowerCase();
  //   email = email.trim();
  //   db.User.find(
  //     {
  //       email: email
  //     },
  //     (err, users) => {
  //       if (err) {
  //         console.log('err 2:', err);
  //         return res.send({
  //           success: false,
  //           message: 'Error: server error'
  //         });
  //       }
  //       if (users.length != 1) {
  //         return res.send({
  //           success: false,
  //           message: 'Error: Invalid'
  //         });
  //       }
  //       const user = users[0];
  //       if (!user.validPassword(password)) {
  //         return res.send({
  //           success: false,
  //           message: 'Error: Invalid'
  //         });
  //       }
  //       // Otherwise correct user
  //       db.UserSession.create({
  //         userId: user._id
  //       }).then(userSession => {
  //         return res.send({ success: true, token: userSession._id });
  //       });
  //     }
  //   );
  // },
  // verify: function(req, res) {
  //   // Get the token
  //   const { query } = req;
  //   const { token } = query;
  //   // ?token=test
  //   // Verify the token is one of a kind and it's not deleted.
  //   db.UserSession.find(
  //     {
  //       _id: token,
  //       isDeleted: false
  //     },
  //     (err, sessions) => {
  //       if (err) {
  //         console.log(err);
  //         return res.send({
  //           success: false,
  //           message: 'Error: Server error'
  //         });
  //       }
  //       if (sessions.length != 1) {
  //         return res.send({
  //           success: false,
  //           message: 'Error: Invalid'
  //         });
  //       } else {
  //         // DO ACTION
  //         return res.send({
  //           success: true,
  //           message: 'Good'
  //         });
  //       }
  //     }
  //   );
  // }
};
