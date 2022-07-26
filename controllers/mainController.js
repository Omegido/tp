const controller ={
    index:  (req, res) =>{
        res.render('index')},
    login: (req, res) =>{
        res.render('login')},
    registro: (req, res) =>{
        res.render('registro')},
    productos: (req, res) =>{
        res.render('productos')},
    carrito: (req, res) =>{
        res.render('carrito')},
    altaproducto: (req, res) =>{
        res.render('altaproducto')},
    editarproducto: (req, res) =>{
            res.render('editarproducto')},
};

module.exports = controller;