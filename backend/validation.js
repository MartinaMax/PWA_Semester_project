const Joi = require('joi');
const jwt = require('jsonwebtoken');

// Validating registration input
const registerValidation = (data) => {
    const schema = Joi.object(
        {
            name: Joi.string()
                        .min(2)
                        .max(255)
                        .required(),
            
            email: Joi.string()
                        .min(5)
                        .max(255)
                        .required(),
            
            password: Joi.string()
                        .min(8)
                        .max(255)
                        .required(),
        });
    
    return schema.validate(data);
}

// Validating login input
const loginValidation = (data) => {
    const schema = Joi.object(
        {
            email: Joi.string()
                        .min(5)
                        .max(255)
                        .required(),
            
            password: Joi.string()
                        .min(8)
                        .max(255)
                        .required(),

        });
    
    return schema.validate(data);
}

// Verifying the token
const tokenVerification = (req, res, next) => {
    const token = req.header("auth-token");

    if(!token) return res.status(401).json({ error: "You don't have permission"});

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();

    } catch(error) {
        res.status(400).json({error: "Token is invalid!"})
    }
}


module.exports = { registerValidation, loginValidation, tokenVerification };