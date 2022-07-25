const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HallBookingPortal');
const Schema = mongoose.Schema;

var NewHallSchema = new Schema({
    HallName: String,
    NumberofSeats: String,
    Location: String,
    ImageUrl: String
});

var Halldata = mongoose.model('halldtls', NewHallSchema);                        

module.exports = Halldata;