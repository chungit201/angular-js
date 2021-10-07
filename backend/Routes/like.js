import express from 'express';
import {
  showLikeByID,
  likeID,
  createLike,
  updateLike,
  findLike,
  updateLikeByUser
} from '../Controllers/likeControllers';
const router = express.Router();
router.get('/like/find', findLike)
router.get('/like/:likeID', showLikeByID);
router.post('/like/create', createLike);
router.put('/like/update/:likeID', updateLike);
router.put('/like/update-like-user/:likeID', updateLikeByUser);


router.param('likeID', likeID)

module.exports = router;
