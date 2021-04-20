const {Usuario} = require('../models');

module.exports = async (req, res, next) => {
    let { nome, email, senha } = req.body;
    let user = await Usuario.findAll({where:{email}});
    
    
    if (nome || email || senha){
        res.status(400).json({erro: "Informe todos os dados."})
    } else {
    // length = 0 significa que não tem usuário e já passa pro else
        if (user.length){ 
            res.status(400).json({erro:"Email já cadastrado."});
            return
        } else {
            if (senha.length < 6 || senha.length > 12){
                res.status(400).json({erro:"A senha de maior que 6 caracteres e menor que 12 caracteres."});
            return
            } else {
                next();
            }
        }
    }    
}