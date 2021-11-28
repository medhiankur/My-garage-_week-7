const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require("../model/userSchema");
const Cust = require("../model/custSchema");
const Inv = require("../model/invSchema");
const Job = require("../model/jobSchema");
const Parts = require("../model/partsSchema");

router.get('/', (req, res)=>{
    res.send(`Hello world from the server router `)
});

// router.post('/register', (req, res)=>{

//     const {name,email,phone,work,password,cpassword} = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: "fill the field properly"})
//     }

//     User.findOne({email:email})
//     .then((userExist) =>{
//         if(userExist) {
//             return res.status(422).json({error: "Email already exist"});
//         }

//     const user = new User({name,email,phone,work,password,cpassword});
//     user.save().then(()=>{
//         res.status(201).json(({Message:"user resistered successfully"}))
//     // }).catch((err)=> res.status(500).json({error:"failed to register"}));
//     }).catch(err => {console.log(err);});

//     }).catch(err => {console.log(err);});
// });

router.post('/register', async (req, res)=>{

    const { fname ,lname , phone ,email,password ,cpassword} = req.body;
    if( !fname || !lname || ! phone || !email|| !password || !cpassword){
        return res.status(422).json({error: "fill the field properly"})
    }

    try {

        const userExist = await User.findOne({email:email})
        if(userExist) {
            return res.status(422).json({error: "Email already exist"});
        }
        
        const user = new User({name,email,phone,work,password,cpassword});
        const userRegister = await user.save();

        if(userRegister){
            res.status(201).json(({Message:"user resistered successfully"}))
        }

     }catch(err){
        console.log(err);
    }
 
});

//Login  route

router.post('/signin', async (req, res)=>{
    // console.log(req.body);
    // res.json({ message : "good run"});
    try{
        let token;
        const {email, password} = req.body;
        if((!email || !password)){
            return res.status(400).json({error:"please fill the data"})
        }
        console.log(req.body)
        console.log(email)
        
        const userLogin = await User.findOne({email: email});

        console.log(User)
        console.log(userLogin)

        if(userLogin){
            const isMatch = await bcrypt.compare (password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            if (!isMatch){
                res.status(400).json({error:"Invaide Credentials 1"})
            }else{
                res.json({ message : "User signin succesfully"})
            }

        }else{
                res.status(400).json({error:"Invaide Credentials 2"})
        }

        const isMatch = await bcrypt.compare (password, userLogin.password)

        console.log();
        if (!isMatch){
            res.json({error:"Invaide Credentials"})
        }else{
            res.json({ message : "User signin succesfully"})
        }


    }catch(err){
        console.log(err)
    }
})

//Customer Entry 

router.post('/customers', async (req, res)=>{

    const {cname,cemail,cphone,vehicleBrand,vehicleNo} = req.body;
    if(!cname || !cemail || !cphone || !vehicleBrand || !vehicleNo){
        return res.status(422).json({error: "fill the field properly"})
    }

    try {

        const custExist = await Cust.findOne({cemail:cemail})
        if(custExist) {
            return res.status(422).json({error: "Customer Email already exist"});
        }
        
        const cust = new Cust({cname,cemail,cphone,vehicleBrand,vehicleNo});
        const custRegister = await cust.save();

        if(custRegister){
            res.status(201).json(({Message:"Customer  resistered successfully"}))
        }

     }catch(err){
        console.log(err);
    }
 
});

// Invoice Entry 

router.post('/invoices', async (req, res)=>{

    const {invno,jregno,icustphone,vehicleBrand,vehicleNo,iamount,itax,itotamount} = req.body;
    if(!invno || !icusName || !icustphone || !vehicleBrand || !vehicleNo || !iamount || !itax || !itotamount){
        return res.status(422).json({error: "fill the field properly"})
    }

    try {

        const invExist = await Inv.findOne({invno:invno})
        if(invExist) {
            return res.status(422).json({error: "invnoice no already exist"});
        }
        
        const inv = new Inv({invno,icusName,icustphone,vehicleBrand,vehicleNo,iamount,itax,itotamount});
        const invEntry = await inv.save();

        if(invEntry){
            res.status(201).json(({Message:"Invoice entered successfully"}))
        }

     }catch(err){
        console.log(err);
    }
 
});

//Job Card Entry

router.post('/jobcards', async (req, res)=>{

    const {Jobno,jregno,jcustname,jvehicleBrand,jvehiclemodel,jvehicledsc,jcustvoice,jinspectvoice, jdamagedsc, jestcost, jpartcost, jlbrcost, jtotcost} = req.body;
    if(!Jobno || !jregno || !jcustname || !jvehicleBrand || !jvehiclemodel || !jvehicledsc || !jcustvoice || !jinspectvoice || !jdamagedsc || !jestcost || !jpartcost || !jlbrcost || !jtotcost){
        return res.status(422).json({error: "fill the field properly"})
    }

    try {

        const jobExist = await Job.findOne({Jobno:Jobno})
        if(jobExist) {
            return res.status(422).json({error: "JOB CARD no already exist"});
        }
        
        const job = new Job({Jobno,jregno,jcustname,jvehicleBrand,jvehiclemodel,jvehicledsc,jcustvoice,jinspectvoice, jdamagedsc, jestcost, jpartcost, jlbrcost, jtotcost});
        const jobEntry = await job.save();

        if(jobEntry){
            res.status(201).json(({Message:"Job card  entered successfully"}))
        }

     }catch(err){
        console.log(err);
    }
 
});

//Job parts Entry

router.post('/parts', async (req, res)=>{

    const {pcode,pname,pmaker,psaller,pprize,pvehicle, pquantity } = req.body;
    if(!pcode|| !pname|| !pmaker|| !psaller|| !pprize|| !pvehicle|| ! pquantity ){
        return res.status(422).json({error: "fill the field properly"})
    }

    try {

        const partExist = await Parts.findOne({pcode:pcode})
        if(partExist) {
            return res.status(422).json({error: "Part no already exist"});
        }
        
        const parts = new Parts({pcode,pname,pmaker,psaller,pprize,pvehicle, pquantity});
        const partsEntry = await parts.save();

        if(partsEntry){
            res.status(201).json(({Message:"Part  entered successfully"}))
        }

     }catch(err){
        console.log(err);
    }
 
});


module.exports = router;