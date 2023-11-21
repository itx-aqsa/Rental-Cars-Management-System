function requireRole(role){
    return (req, res, next) => {
        const userRole = req.user.role;
        console.log(userRole)
        if(userRole == role){
            next();
        }
        else{
            res.status(403).json({message: "Permission Denied"});
        }
    }
}

module.exports = requireRole;