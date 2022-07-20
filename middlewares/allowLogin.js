module.exports = (req, res, next) => {
    if(req.session.usuario == undefined || req.session.usuario == ""){
        req.usuario = ""
        next()
    } else {
        req.usuario = req.session.usuario;
        res.render('index', {usuario : req.usuario})
    }
}