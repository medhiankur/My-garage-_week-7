const mongoose = require('mongoose');

const partsSchema = new mongoose.Schema({

    pcode:{
        type :String,
        required: true
    },
    pname:{
        type :String,
        required: true
    },
    pmaker:{
        type :String,
        required: true
    },
    psaller:{
        type :String,
        required: true
    },
    pprize:{
        type :String,
        required: true
      
    },
    pvehicle:{
        type :String,
        required: true
    },
    pquantity:{
        type :String,
        required: true
    }
})

const Parts = mongoose.model('PARTS', partsSchema);

module.exports = Parts;
