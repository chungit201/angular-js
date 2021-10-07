import express from 'express';
import {
  userID,
  userDetail,
  updateUser,
  searchUser,
  uniqueEmail
} from '../Controllers/userControllers';
const router = express.Router();

router.get('/profile/search', searchUser);
router.get('/profile/unique-email', uniqueEmail);
router.get('/profile/:userID', userDetail);
router.put('/profile/update/:userID', updateUser);


router.param('userID', userID);
module.exports = router;
