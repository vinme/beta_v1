//users.js (server/services/v1/users/users.js)

const express = require('express');
const hotelModel = require('../../../models/hotel');
const { validationResult } = require('express-validator');


const createHotel = async (req, res, next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    let { 
        code, 
        name, 
        motto, 
        shortdescription,
        address, 
        address2,
        city, 
        state,
        country,
        zipcode,
        telephone,
        fax,
        tollfree,
        email,
        image,
        images } = req.body;

    try{
        let hotel = hotelModel.create({
            code: code, 
            name: name, 
            motto: motto, 
            shortdescription: shortdescription,
            address: address, 
            address2: address2,
            city: city, 
            state: state,
            country: country,
            zipcode: zipcode,
            telephone: telephone,
            fax: fax,
            tollfree: tollfree,
            email: email,
            image: image,
            images: images    
        });            
        if(!hotel){
            throw new error();
        }
    
        return res.status(201).json({
            "success" : [{
                "msg" : "Hotel has been added successfully"
            }]
        });
    }
    catch(err){
        console.log(error);
        return res.status(500).json(
            { 
                "errors" : [{
                    "msg": "there was a problem adding hotel."   
                }]
            }
        );
    }
}

const getHotels = async (req, res, next) =>{
    let hotels = await hotelModel.find().select();

    if(!hotels){
        return res.status(404).json({
            "errors":[{
                "msg" : " no hotels found"
            }]
        })
    }

    return res.status(200).json({
        "success" : [{
            "msg" : " hotels fetched successfully",
            "data" : hotels
        }]
    })
}

const getHotelDetails = async (req,res,next) => {

    let { hotelId } = req.params;

    let hotel = await hotelModel.findById(hotelId).select('name , address');

    if(!hotel){
        return res.status(404).json({
            "errors":[{
                "msg" : " no hotel found"
            }]
        })
    }

    return res.status(200).json({
        "success" : [{
            "msg" : " hotel fetched successfully",
            "data" : hotel
        }]
    })
}

const updateHotel = async (req,res,next) => {

    let { hotelId } = req.params;
    
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    let { 
        code, 
        name, 
        motto, 
        shortdescription,
        address, 
        address2,
        city, 
        state,
        country,
        zipcode,
        telephone,
        fax,
        tollfree,
        email,
        image,
        images } = req.body;

        let hotelUpdate = {
            code: code, 
            name: name, 
            motto: motto, 
            shortdescription: shortdescription,
            address: address, 
            address2: address2,
            city: city, 
            state: state,
            country: country,
            zipcode: zipcode,
            telephone: telephone,
            fax: fax,
            tollfree: tollfree,
            email: email,
            image: image,
            images: images    
        };  

    let hotel = await hotelModel.findByIdAndUpdate(hotelId, hotelUpdate)

    if(!hotel){
        return res.status(404).json({
            "errors":[{
                "msg" : " no hotel found"
            }]
        })
    }

    return res.status(200).json({
        "success" : [{
            "msg" : " hotel fetched successfully",
            "data" : hotel
        }]
    })
}

const deleteHotel = async (req,res,next) => {

    let { hotelId } = req.params;

    let hotel = await hotelModel.findByIdAndDelete(hotelId);

    if(!hotel){
        return res.status(404).json({
            "errors":[{
                "msg" : " no hotel found"
            }]
        })
    }

    return res.status(200).json({
        "success" : [{
            "msg" : " hotel deleted successfully",
        }]
    })
}

module.exports = {
    createHotel: createHotel,
    getHotelDetails : getHotelDetails,
    getHotels: getHotels,
    updateHotel: updateHotel,
    deleteHotel: deleteHotel
}