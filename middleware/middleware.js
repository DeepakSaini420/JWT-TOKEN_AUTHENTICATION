const jasonwebtoken = require('jsonwebtoken');

const ctoken = process.env.token;

function verifyToken(req,res){
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token){
        return res.status(401).json({
            error:"Token is required for authentication"
        })
    }

    try{
        const decode = jasonwebtoken.verify(token,ctoken);
        req.body = decode
    }catch(err){
        return res.status(401).json({
            error:"Invalid Token"
        })
    }

    return next();
}

module.exports=verifyToken