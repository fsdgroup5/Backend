const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HallBookingPortal');
const Schema = mongoose.Schema;

var NewBookingSchema = new Schema({
    UserName: String,
    UserMailId: String,
    HallName: String,
    DateOfBooking: Date,
    TimeSlot:String
    
});

var Bookingdata = mongoose.model('bookingdtls', NewBookingSchema);                        

module.exports = Bookingdata;