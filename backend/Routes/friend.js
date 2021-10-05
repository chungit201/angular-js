import express from 'express';
import {
  addFriend,
  removeFriend,
  friendID,
  updateFriend,
  listFriend
} from '../Controllers/friendControllers.js';
const router = express.Router();

router.post('/add-friend', addFriend);
router.put('/friend/update/:friendID', updateFriend);
router.delete('/friend/remove/:friendID', removeFriend);
router.get('/friend', listFriend);

router.param('friendID', friendID);

module.exports = router;
