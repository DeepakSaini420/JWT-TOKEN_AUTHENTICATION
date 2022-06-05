const jsonwebtoken =require('jsonwebtoken')
const bcrypt = require('bcrypt');
const userModel = require('./user.model');

async function addUser(name,email,password){
    try {
        const oldUser = await userModel.findOne({email});

        if(oldUser){
            return false;
        }
        const encryptedPassword =await bcrypt.hash(password,10);
    
        const user =await userModel.create({
            name:name,
            email:email.toLowerCase(),
            password:encryptedPassword
        })
    
        const token = jsonwebtoken.sign({
            email
        },process.env.token,{
            expiresIn:'2h'
        })
        user.token = token;
        return true
            
    } catch (error) {
        console.log(error)
        return false;
    }

}

async function login(email,password){

    try {
        const user = await userModel.findOne({email});

        if(user && (await bcrypt.compare(password,user.password))){
            const token = jsonwebtoken.sign({
                email
            },process.env.token,{
                expiresIn:'2h'
            })

            user.token = token;
            return {
                name:user.name,
                email:user.emai,
                token:user.token
            }
        }

        return false
    } catch (error) {
        return false
    }

}

module.exports = {
    addUser,
    login
}