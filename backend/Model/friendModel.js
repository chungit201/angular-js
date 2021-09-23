import mongoose from 'mongoose';
// const {
//   ObjectId
// } = mongoose.Schema;

const friendSchema = new mongoose.Schema({
  friend: {
    type: Object,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('friend', friendSchema);
