const express = require('express');
const router = express.Router();
const {create_user, getAll_users, update_user, delete_user, single_page} = require('../controller/userController')

// post users, C -- for create
router.post('/api/user',create_user)

// get users, R -- read

router.get('/api/user', getAll_users)

// update user, U -- for update

router.patch('/api/user/:id', update_user)

// Delete user, D -- for Delete

router.delete('/api/user/:id', delete_user)

//  params for single page


router.get('/api/user/:id',single_page);



module.exports = router;
