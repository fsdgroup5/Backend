const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HallBookingPortal');
const Schema = mongoose.Schema;

var NewAdminSchema = new Schema({
    AdminName: String,
    AdminPassword: String
  
});
var Admindata = mongoose.model('admin', NewAdminSchema);                        

module.exports = Admindata;