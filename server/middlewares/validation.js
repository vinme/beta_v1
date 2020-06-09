// validation.js file   (server/middlewares/validation.js)

const { body } = require('express-validator')

const validateRegistrationBody = () => {
    return [ 
        body('name')
        .exists()
        .withMessage('name field is required')
        .isLength({min:3})
        .withMessage('name must be greater than 3 letters'),
        body('email').exists()
        .withMessage('email field is required')
        .isEmail()
        .withMessage('Email is invalid'),
        body('password')
        .exists()
        .withMessage('password field is required')
        .isLength({min : 8,max: 12})
        .withMessage('password must be in between 8 to 12 characters long')
       ] 
} 

const validateLoginBody = () => {
    return [ 
        body('email').exists()
        .withMessage('email field is required')
        .isEmail()
        .withMessage('Email is invalid'),
        body('password')
        .exists()
        .withMessage('password field is required')
        .isLength({min : 8,max: 12})
        .withMessage('password must be in between 8 to 12 characters long')
       ] 
} 

const validateShopBody = () => {
    return [ 
        body('name')
        .exists()
        .withMessage('name field is required')
        .isLength({min:3})
        .withMessage('name must be greater than 3 characters'),
        body('address')
        .exists()
        .withMessage('address field is required')
        .isLength({min:3})
        .withMessage('address must be greater than 3 characters'),
        body('description')
        .exists()
        .withMessage('description field is required')
        .isLength({min:3})
        .withMessage('description must be greater than 3 characters'),
        body('city')
        .exists()
        .withMessage('city field is required')
        .isLength({min:1})
        .withMessage('city should not be empty'),
        body('country')
        .exists()
        .withMessage('country field is required')
        .isLength({min:1})
        .withMessage('country should not be empty'),
       ] 
} 



module.exports = {
    validateRegistrationBody : validateRegistrationBody,
    validateLoginBody : validateLoginBody,
    validateShopBody: validateShopBody
}