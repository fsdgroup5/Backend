const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Hall-Booking-system');
const Schema = mongoose.Schema;

var NewHallSchema= new Schema({
    HallName:String,
    Seats:Number,
    Location:String,
    Image:String
})
var NewHallData = mongoose.model('Hall', NewHallSchema);  
module.exports=NewHallData;