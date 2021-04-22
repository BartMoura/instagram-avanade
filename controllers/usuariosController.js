const { Usuario, sequelize } = require('../models');

const usuariosController = {
    index: async (req, res) => {
        const usuarios = await Usuario.findAll();
        return res.render('usuarios', { listaUsuarios: usuarios });
    },

    // renderizar a página de registro
    // não é asyn porque não está esperando nada (nesse caso do banco de dados)
    registro: (req, res) => {
        return res.render('registro');
    },

    create: async (req, res) => {
        let {nome, email, senha} = req.body;

        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        });

        return res.json(novoUsuario);
    },

    update: async (req, res) => {
        let {id} = req.params;
        let { nome, email, senha } = req.body;

        let atualizarUsuario = await Usuario.update({
            nome,
            email,
            senha
        }, {
            where: {
                id
            }
        });

        return res.json(atualizarUsuario);
    },

    delete: async (req, res) => {
        let {id} = req.params;

        let deletarUsuario = await Usuario.destroy({
            where: {
                id
            }
        });

        return res.json(deletarUsuario);
    }

}

module.exports = usuariosController;