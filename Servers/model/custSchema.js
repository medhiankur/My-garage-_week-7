const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const custSchema = new mongoose.Schema({

    cname:{
        type :String,
        required: true
    },
    cemail:{
        type :String,
        required: true
    },
    cphone:{
        type :Number,
        required: true
    },
    vehicleBrand:{
        type :String,
        required: true
    },
    vehicleNo:{
        type :String,
        required: true
    },
        
})

const Cust = mongoose.model('CUSTOMER', custSchema);

module.exports = Cust;
