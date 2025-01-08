const express = require('express');
const router = express.Router();
const UserControler = require('../controllers/user.controller');


router.get('/', UserControler.getUsers)
      .post('/', UserControler.createUser);

module.exports = router;