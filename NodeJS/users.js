const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('./user'); 

const router = express.Router();


router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.getUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: 'Username already in DB' });
    }

    const newUser = await User.createUser(username, password);
    res.json({ msg: 'Signup Correct. Now you can log in.', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid info' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET);
    User.updateUserToken(user.id, token);

    return res.json({ token, id: user.id, username: user.username });
  })(req, res, next);
});


router.get('/logout', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const userId = req.user.id;

  try {
    await User.updateUserToken(userId, null);
    res.json({ msg: 'Logout Done.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
