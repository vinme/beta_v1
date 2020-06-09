//users.js (server/services/v1/users/users.js)

const express = require('express');
const userModel = require('../../../models/user');

const getAllUsers = async (req, res, next) =>{
    let users = await userModel.find().select();

    if(!users){
        return res.status(404).json({
            "errors":[{
                "msg" : " no users found"
            }]
        })
    }

    return res.status(200).json({
        "success" : [{
            "msg" : " user fetched successfully",
            "data" : users
        }]
    })
}

const getUserDetails = async (req,res,next) => {

    let { userId } = req.params;

    let user = await userModel.findById(userId).select('name , email');

    if(!user){
        return res.status(404).json({
            "errors":[{
                "msg" : " no user found"
            }]
        })
    }

    return res.status(200).json({
        "success" : [{
            "msg" : " user fetched successfully",
            "data" : user
        }]
    })
}

module.exports = {
    getUserDetails : getUserDetails,
    getAllUsers: getAllUsers
}