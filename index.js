const express = require ('express');
const cors = require ('cors');
const {Sequelize, DataTypes} =  require('sequelize');

// Configurando conexão com Banco de dados.
const sequelize = new Sequelize('primeira_API', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

//ORM - Mapeando classe para tabela no banco de dados.
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone:{
        type: DataTypes.FLOAT,
        allowNull:false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const moto = sequelize.define('moto', {
    cor: {
        type: DataTypes.STRING,
        allowNull:false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull:false
    },
    cilindrada: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    marca:{
        type: DataTypes.STRING,
        allowNull:false
    },
})

const carro = sequelize.define('carro', {
    tipo: {
        type: DataTypes.STRING,
        allowNull:false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull:false
    },
    nome: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    marca:{
        type: DataTypes.STRING,
        allowNull:false
    },
})

//Configurando servidor EXPRESS
const app = express()
app.use(cors())
app.use(express.json())

// Definindo rotas
const port = 3000


// Rota para buscar todos os clientes no banco de dados.
app.get('/clientes', async(req, res) => {
    const todosOsClientes = await Cliente.findAll()
    res.json(todosOsClientes)
})
app.get('/motos', async(req, res) =>{
    const todasMotos = await moto.findAll()
    res.json(todasMotos)
})
app.get('/carros', async(req, res)=> {
    const todosCarros = await carro.findAll()
    res.json(todosCarros)
})

// rota para cadastrar um cliente e inserir no banco de dados.

app.post('/cliente', async(req, res) => {
    try{
        const{nome, cpf , telefone, email, endereco} = req.body
        const novoCliente = await Cliente.create({nome,cpf,telefone,email,endereco})

        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso',
            cliente: novoCliente
        })
    } catch (erro) {
            res.status(400).json({
                mensagem: 'Erro ao cadastrar cliente. Verifique se o e-mail já existe'
            })
        }
})

app.post('/moto', async(req, res) =>{
    try{
        const{cor, modelo,cilindrada,placa,marca} = req.body
        const motoNova = await Moto.create({cor,modelo,cilindrada,placa,marca})

        res.status(201).json({
            mensagem: 'Moto Cadastrada com sucesso',
            Moto: motoNova
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar Moto. Verifique se a Moto já foi cadastrada'
        })
    }
})

app.post('/carro', async(req,res) =>{
    try{
        const{tipo,modelo,nome,placa,marca} = req.body
        const carroNovo = await carro.create ({tipo,modelo,nome,placa,marca})

        res.status(201).json({
            mensagem: 'Carro cadastrado com sucesso',
            Carro: carroNovo
        })
    } catch (erro){
        res.status(400).json({
            mensagem: ' Erro ao cadastrar Carro. Verifique se o Carro já foi cadastrado'
        })
    }
})

// Iniciar API  e Conectar ao Banco de dados.

sequelize.sync().then(() => {
    app.listen(port, () =>{
        console.log(`Servidor rodando em http://localhost:${port}`)
        console.log(' Banco de dados sincronizado.')
    })
}).catch((erro) => {
    console.erro(' Erro ao conectar ou sincronizar com o banco de dados', erro)
})