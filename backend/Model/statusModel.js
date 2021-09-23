import mongoose from 'mongoose';
const {
  ObjectId
} = mongoose.Schema;
const statusSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  like: {
    type: ObjectId,
    ref: 'Like'
  },
  album: {
    type: Object,
  },
  comment: {
    type: ObjectId,
    ref: 'Comment'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Status', statusSchema);
