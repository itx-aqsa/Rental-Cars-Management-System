function sharedRoles(roles){
    return (req, res, next) => {
        const userRole = req.user.role;
        console.log(userRole)
        if(roles.includes(userRole)){
            next();
        }
        else{
            res.status(403).json({message: "Permission Denied"});
        }
    }
}

module.exports = sharedRoles;