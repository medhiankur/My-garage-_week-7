const mongoose = require('mongoose');

const invSchema = new mongoose.Schema({

    invno:{
        type :String,
        required: true
    },
    icusName:{
        type :String,
        required: true
    },
    icustphone:{
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
    iamount:{
        type :String,
        required: true
    },
    itax:{
        type :String,
        required: true
    },
    itotamount :{
        type :String,
        required: true
    }
        
})

const Inv = mongoose.model('INVOICE', invSchema);

module.exports = Inv;
