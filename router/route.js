const express = require('express')
const {getUserById,createUser,updateUser,deletUser} = require('../controllers/user.controller')
const router = express.Router();

// router.get('/',get);

router.get('/:id',getUserById)

router.post('/post',createUser)

router.put('/put/:id',updateUser)

router.delete('/delete/:id',deletUser)

module.exports = router;