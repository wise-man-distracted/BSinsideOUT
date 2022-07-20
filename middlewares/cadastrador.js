module.exports = (req, res, next) => {
    if(req.session.usuario == undefined){
        req.usuario = ""
        next()
    } else {
        req.usuario = req.session.usuario;
        next();
    }
}