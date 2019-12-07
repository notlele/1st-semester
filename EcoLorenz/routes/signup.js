const express = require('express');
const router = express.Router();
const isNull = require('../script').isNull;
const Database = require('../Database');
const Cryptr = require('cryptr');
const config = require('../config');
const cryptr = new Cryptr(config.security.key);


router.get('/', (req, res, next) => {
    res.render('signup', {
        message: ''
    });
});

router.post('/', (req, res, next) => {

    let cpf = req.body.CPF;
    let name = req.body.name;
    let email = req.body.email;
    let telefone = req.body.tel;
    let password = req.body.password;
    let cep = req.body.cep;
    let nrCasa = req.body.nrCasa;

    console.log(cpf, name, telefone, email, password, cep, nrCasa);

    createUser(cpf, name, telefone, email, password, cep, nrCasa).then(results => {
        req.session.message = `User ${name} created succesfully! Please log in...`;
        res.status(302).redirect('/login');
    }).catch(error => {
        res.status(400).json({ message: "Error creating user.", error: error });
        alert('Não foi possível cadastrar');
    });
});

function createUser(cpf, name, telefone, email, password, cep, nrCasa) {
    return new Promise((resolve, reject) => {
        let create = undefined;
        checkUser(cpf).then(exists => {
            create = !exists;
            if (create) {
                let querystring2 = `INSERT INTO casa (dono, CEP, nrCasa) VALUES ('${cpf}', '${cep}', '${nrCasa}');`;

                insertUsuario(cpf, name, telefone, email, password).then(result => {
                    console.log('fez o primeiro deve fazer o segundo');
                    Database.query(querystring2).then(results => {
                        resolve();
                    }).catch(e => {
                        reject('O segundo não foi');
                    });
                }).catch(error => {
                    reject('O primeiro não foi');
                });
            } else {
                reject('User already exists!');
            }
        }).catch((error) => {
            console.log('User already exists!');
            reject('User already exists!');
        });
    });
}

function checkUser(cpf) {
    let querystring = `SELECT * FROM  usuario WHERE cpf = '${cpf}'`;
    return new Promise((resolve, reject) => {
        Database.query(querystring).then(results => {
            let exists = results.length > 0;
            resolve(exists);
        }).catch(error => {
            reject(error);
        });
    });
}

function insertUsuario(cpf, name, telefone, email, password) {
    let querystring = `INSERT INTO usuario (CPF, nmUsuario, nrTelefone, email, senha) VALUES ('${cpf}', '${name}', '${telefone}', '${email}', '${password}');`;
    return new Promise((resolve, reject) => {
        Database.query(querystring).then(results => {
            primeiroOk = true;
            resolve();
        }).catch(error => {
            console.error(error);
            reject('O primeiro não foi' + error);
        }).finally(() => {
        });
    });
}

module.exports = router;
