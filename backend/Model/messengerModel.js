import mongoose from 'mongoose';
const messengerSchema = mongoose.Schema({
  messenger: {
    type: Object
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Messenger', messengerSchema);
