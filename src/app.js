const express = require('express')
const multer = require('multer');
const app = express()
const path =require('path');
const dotenv=require('dotenv')
const isProd = process.env.APP_ENV === 'prod'
if(!isProd)
    dotenv.config({path:'.env'})
const bodyParser=require('body-parser')
const mongoose=require('mongoose')


const apiPlanTrip = require('./route/apiPlanTrip');
const apiTraveler = require('./route/apiTraveler');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.set('view engine', 'ejs')



const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect("mongodb+srv://apptriplanner:323924605@triplanner.sf4cqvl.mongodb.net/", connectionParams)
    .then(() => {
        console.log('connected');

    }).catch((err) => {
        console.log(`error connecting ${err}`);
})
app.get('/', (req,res) => {
    res.render('homePage');
});


app.use('/plantrip',apiPlanTrip)
app.use('/traveler',apiTraveler)



const port =  process.env.PORT || 4000
app.listen(port, () => {    
    console.log(`\nserver is up and running at: http://127.0.0.1:${port}\n` )
})
