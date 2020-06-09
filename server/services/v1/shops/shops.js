//users.js (server/services/v1/users/users.js)

const express = require('express');
const shopModel = require('../../../models/shop');
const { validationResult } = require('express-validator');


const createNewShop = async (req, res, next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    let { name, address, description, city, country } = req.body;

    try{
        let shop = shopModel.create({
            name: name, 
            address: address, 
            description: description, 
            city: city, 
            country: country});
            
            if(!shop){
                throw new error();
            }
        
            return res.status(201).json({
                "success" : [{
                    "msg" : "shop has been added successfully"
                }]
            });
    }
    catch(err){
        console.log(error);
        return res.status(500).json(
            { 
                "errors" : [{
                    "msg": "there was a problem adding shop."   
                }]
            }
        );
    }


}

const getAllShops = async (req, res, next) =>{
    let shops = await shopModel.find().select();

    if(!shops){
        return res.status(404).json({
            "errors":[{
                "msg" : " no shops found"
            }]
        })
    }

    return res.status(200).json({
        "success" : [{
            "msg" : " shops fetched successfully",
            "data" : shops
        }]
    })
}

const getShopDetails = async (req,res,next) => {

    let { shopId } = req.params;

    let shop = await shopModel.findById(shopId).select('name , address');

    if(!shop){
        return res.status(404).json({
            "errors":[{
                "msg" : " no shop found"
            }]
        })
    }

    return res.status(200).json({
        "success" : [{
            "msg" : " user fetched successfully",
            "data" : shop
        }]
    })
}

module.exports = {
    createNewShop: createNewShop,
    getShopDetails : getShopDetails,
    getAllShops: getAllShops
}