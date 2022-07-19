
module.exports = (req, res, next) => {
    if(req.session.usuario == undefined){
        return res.render('login', {usuario : ""});
    } else {
        req.usuario = req.session.usuario;
        next();
    }
}