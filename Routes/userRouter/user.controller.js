const { addUser, login } = require("../../Model/userModel/user");

async function userSignUp(req,res) {

    const { name,email,password } = req.body;

    if(!(name && email && password)) return res.status(400).json({message:"Please Provide all fields"})

    const sucess = await addUser(name,email,password);

    if(sucess){
        return res.status(201).json({
            message:"User Created"
        })
    }else{
        return res.status(401).json({
            message:"Something wrong happend!!"
        })
    }
}

async function userLogIn(req,res) {
    const { email,password } = req.body;

    if(email && password){

        const isLogin = await login(email,password);

        if(isLogin==false){
            return res.status(400).json({
                message:"Please give Correct Credentials"
            })
        }else{
            return res.status(200).json({
                isLogin
            })
        }

    }

    return res.status(400).json({
        message:"Please Provide all fields"
    })
}

module.exports={
    userLogIn,
    userSignUp
}