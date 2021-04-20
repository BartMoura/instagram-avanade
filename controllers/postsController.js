const { request } = require('express');
const { Post } = require('../models/');

const postsController = {
    index: async (req, res) => {
        const post = await Post.findAll();
        return res.render('index', {listaPosts: post});
    },

    create: async (req, res) => {
        let {texto, img, usuarios_id, n_likes} = req.body;

        let novoPost = await Post.create({
            texto,
            img,
            usuarios_id,
            n_likes
        });

        return res.json(novoPost);
    },

    update: async (req, res) => {
        let {id} = req.params;
        let { texto, img, usuarios_id, n_likes } = req.body;

        let atualizarPost = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        }, {
            where: {
                id
            }
        });

        return res.json(atualizarPost);
    },

    delete: async (req, res) => {
        let {id} = req.params;

        let deletarPost = await Post.destroy({
            where: {
                id
            }
        });

        return res.json(deletarPost);
    },

    show: async (req, res) => {
        let { id } = req.params;
        let posts = await Post.findAll({
            where: {
                usuarios_id: id
            }}
        );
        return res.json(posts);
    }

}

module.exports = postsController;