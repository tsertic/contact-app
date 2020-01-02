const express = require('express');
const router = express.Router();

//@route Get api/auth
//@desc get logged in user
//@access Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

//@route Post api/auth
//@desc auth user and get token
//@access public
router.post('/', (req, res) => {
  res.send('User auth and you may get or not token');
});
module.exports = router;
