const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    Jobno:{
        type :String,
        required: true
    },
    jregno:{
        type :String,
        required: true
    },
    jcustname:{
        type :String,
        required: true
    },
    jvehicleBrand:{
        type :String,
        required: true
    },
    jvehiclemodel:{
        type :String,
        required: true
      
    },
    jvehicledsc:{
        type :String,
        required: true
    },
    jcustvoice:{
        type :String,
        required: true
    },
    jinspectvoice:{
        type :String,
        required: true
    },
    jdamagedsc :{
        type :String,
        required: true
    },
    jestcost :{
        type :String,
        required: true
    },
    jpartcost:{
        type :String,
        required: true
    },
    jlbrcost:{
        type :String,
        required: true
    },
    jtotcost:{
        type :String,
        required: true
    }  
})

const Job = mongoose.model('JOBCARDS', jobSchema);

module.exports = Job;
