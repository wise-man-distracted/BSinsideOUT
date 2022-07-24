module.exports = (req, res, next) => {
    if(req.usuario.id == 1) {
        next()
    } else {
        res.render('error', {error: "Você precisa da permissão do cléro para acessar esse ambiente", status: 403, usuario: req.usuario})
    }
}