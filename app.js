const  express= require('express');
const  cors= require('cors');
const  AdminData= require('./src/model/admin');
const  BookingData= require('./src/model/bookings');
const  hallData= require('./src/model/hall');
const  userData= require('./src/model/users');
var    bodyparser= require('body-parser');

var app = new express();
app.use(cors());
app.use(bodyparser.json());


// to get admin name and password from database
function getadmin(){
  AdminData.findOne().then((data)=>{
      // var AdminName =data.AdminName;
      // var password =data.AdminPassword;
      //  console.log(AdminName,password);
     });
     
 }
getadmin();

app.listen('3000',function(){
    console.log('Listening to the Port :3000');
});


