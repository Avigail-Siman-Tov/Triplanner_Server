const mongoose = require('mongoose');
const Traveler = mongoose.model('Traveler', new mongoose.Schema({
    travelerMail:{
        type:String,
        required:true,
        unique: true
    },
    travelerName:{
        type:String,
        required:true,
        trim:true
    },
    travelerBirthYear:{
        type:Number
    },
    travelerGender:{
        type:String,
    },
    travelerPicture: {
        type: String
    },
    travelerFavoriteCategories:[{
        type:String
    }]
}));

module.exports = Traveler
