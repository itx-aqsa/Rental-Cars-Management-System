const jwt = require('jsonwebtoken')
const JWT_Secret = "Iamaboy.";

const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token')
    if(!token){
        req.status(401).send({error: "Please authenticate with a valid user"})
    }
    else{
        try {
            const data = jwt.verify(token, JWT_Secret)
            req.user = data.customer
            // console.log(req.user)
            // console.log("middleware")
            next()
        } catch (error) {
            res.status(401).send({error: "Please authenticate with a valid user"})
        }
    }
}

module.exports = fetchUser;