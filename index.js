const express = require ('express');
const cors = require ('cors');
const {Sequelize, DataTypes } = require('sequelize');

// CONFIGURANDO CONEXÃO COM BANCO DE DADOS.
const sequelize = new Sequelize('db_api', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

// ORM - MAPEANDO CLASSE PARA TABELA NO BANCO DE DADOS.

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

//CONFIGURANDO SERVIDOR EXPRESS.
const app = express()
app.use(cors()) // PERMITE O FRONT-END ACESSAR A API
app.use(express.json())// PERMITE O SERVIDOR ENTENDER JSON.

const port = 3000

// DEFININDO ROTAS.
// Rota para buscar todos os Clientes no banco de dados.
app.get('/clientes', async(req, res) => {
    const todosOsClientes = await Cliente.findAll()
    res.json(todosOsClientes)
})

// Rota para cadastrar um cliente e inserir no banco de dados.
app.post('/clientes', async(req, res) => {
    try{
        const { nome, email, telefone} = req.body
        const novoCliente = await Cliente.create({nome, email, telefone})

        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso.',
            Cliente: novoCliente
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar cliente. Verifique se o e-mail já existe'
        })
    }
})

// INICIAR API E CONECTAR AO BANCO DE DADOS.

sequelize.sync().then(() => {
    app.listen(port, () =>{
        console.log(`🚀 Servidor rodando em http://localhost:${port}`)
        console.log('🤪 Banco de dados sincronizado.')
    })
}).catch((erro) => {
    console.error('❌ Erro ao conectar ou sincronizar com o banco de dados', erro)
})