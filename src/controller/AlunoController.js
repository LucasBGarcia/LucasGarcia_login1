const bcrypt = require("bcrypt");
const Aluno = require('../models/Aluno')

module.exports = {
    async store(req, res) {
        const { nome, usuario, email, senha, verificaSenha } = req.body;
        try {
            var verificaNome = nome.split(' ');

            if (verificaNome.length < 2) {
                res.status(400).json({ message: "Digite nome e sobrenome" })
                return
            }

            if (senha != verificaSenha) {
                res.status(400).json({ message: "Senha diferente" })
                return
            }

            const verificaUsuario = await Aluno.findOne({ where: { usuario } })
            if (verificaUsuario) {
                res.status(400).json({ message: "Usuario já está em uso" })
                return
            }

            const aluno = await Aluno.findOne({ where: { email } })
            if (aluno) {
                res.status(400).json({ message: "Email já cadastrado" })
                return
            }

            if (!nome || !usuario || !email || !senha) {
                res.status(400).json({ error: "preencha todos os campos" });
            } else {
                const hash = bcrypt.hashSync(senha, 10)
                const NovoAluno = await Aluno.create({ nome, usuario, email, senha: hash });
                return res.status(200).json(NovoAluno);
            }
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async index(req, res) {
        try {
            const alunos = await Aluno.findAll();

            return res.status(200).json(alunos);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
}

