var express=require('express');
const HallData=require('./src/model/Hall');
const cors = require('cors');
const  AdminData= require('./src/model/admin');
const  BookingData= require('./src/model/bookings');
const  userData= require('./src/model/users');

const path = require("path");

var bodyparser=require('body-parser');
var app = new express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(bodyparser.json());


const AddHallRouter=require('./src/routes/AddHallRouter');
const EditHallRouter=require('./src/routes/EditHallRouter');
const DeleteHallRouter=require('./src/routes/DeleteHallRouter');


// to get admin name and password from database
function getadmin(){
    AdminData.findOne().then((data)=>{
        // var AdminName =data.AdminName;
        // var password =data.AdminPassword;
        //  console.log(AdminName,password);
       });
       
   }
  getadmin();

// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
app.use("/insert", AddHallRouter);
app.use('/update',EditHallRouter)
app.use('/remove',DeleteHallRouter);

app.get('/Halls',(req,res)=>{
    HallData.find().then(function(Halls){
        res.send(Halls);
    })
})

app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      HallData.findOne({"_id":id})
      .then((hall)=>{
          res.send(hall);
      });
  })
  

const PORT = (process.env.PORT || 3000);
app.listen(PORT, function(){
    console.log('listening to port ' +PORT);
});