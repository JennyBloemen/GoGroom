const router = express.Router();
const express = require('express');
const DogServices = require('../models/DogServices.js');
const CatServices = require('../models/CatServices.js');
const Profile = require('../models/Profile.js');
const Pets = require('../models/Pets.js');



//GET ALL SERVICES
//do I need this func for both home and service pages???
router.get('/services', async(req,res) =>{
    const dogServ= await DogServices.find();
    const catServ = await CatServices.find();
    res.send(dogServ + catServ);
});

router.get('/', async(req,res) =>{
    const dogServ= await DogServices.find();
    const catServ = await CatServices.find();
    res.send(dogServ + catServ);
});

//PROFILE ROUTES

router.get('/profile/profileId', async(req, res)=>{
    try{
        const profile= await Profile.findOne({_id: req.params.profileId});
        res.send(profile);
    }
    catch(error){
        res.status(404);
        res.status({error:'OOPS! looks like we couldnt find what you were looking for!'})
    }
})


