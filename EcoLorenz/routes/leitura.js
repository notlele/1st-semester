'use strict';

// configurações gerais, mexer com cautela
var express = require('express');
var router = express.Router();
var isNull = require('../script').isNull;
var Database = require('../Database');
const Cryptr = require('cryptr');
const config = require('../config');
const cryptr = new Cryptr(config.security.key);
const moment = require('moment-timezone');
// configurações gerais, mexer com cautela


// consulta que retorna os N últimos registros de leitura
router.get('/ultimas/temperatura', (req, res, next) => {

    var limite_linhas = 5;
    var resposta = [];
    Database.query(`SELECT TOP ${limite_linhas} horario, temperatura FROM sensor order by horario desc`).then(resultados => {
        resultados = resultados.recordsets[0];

       resposta.push(['Momento', 'Temperatura']);

        for (var i = resultados.length-1; i >=0 ; i--) {
            var row = resultados[i];
            var momento = moment(row.horario).format('HH:mm:ss');
            let linha = [];
            linha.push(momento);
            linha.push(row.temperatura);
            resposta.push(linha);
        }
        
        res.json(resposta);
    }).catch(error => {
        console.log(error);
        res.status(400).json({"error": `erro na consulta junto ao banco de dados ${error}`});
    });

});

router.get('/ultimas/umidade', (req, res, next) => {

    var limite_linhas = 5;
    var resposta = [];
    Database.query(`SELECT TOP ${limite_linhas} horario, umidade FROM sensor order by horario desc`).then(resultados => {
        resultados = resultados.recordsets[0];

       resposta.push(['Momento', 'Umidade']);

        for (var i = resultados.length-1; i >=0 ; i--) {
            var row = resultados[i];
            var momento = moment(row.horario).format('HH:mm:ss');
            let linha = [];
            linha.push(momento);
            linha.push(row.umidade);
            resposta.push(linha);
        }
        
        res.json(resposta);
    }).catch(error => {
        console.log(error);
        res.status(400).json({"error": `erro na consulta junto ao banco de dados ${error}`});
    });

});


// consulta que retorna as médias de temperatura e umidade
router.get('/medidas', (req, res, next) => {

    Database.query(`SELECT avg(temperatura) as media_temp , max(temperatura) as max_temp , min(temperatura) as min_temp,
    min(temperatura) + 1 * ( ( max(temperatura) - min(temperatura) ) / 4 ) as primeiroQuartil_temp,
    min(temperatura) + 2 * ( ( max(temperatura) - min(temperatura) ) / 4 ) as mediana_temp,
    min(temperatura) + 3 * ( ( max(temperatura) - min(temperatura) ) / 4 ) as terceiroQuartil_temp,
    avg(umidade) as media_umid , max(umidade) as max_humi , min(umidade) as min_humi,
    min(umidade) + 1 * ( ( max(umidade) - min(umidade) ) / 4 ) as primeiroQuartil_humi,
    min(umidade) + 2 * ( ( max(umidade) - min(umidade) ) / 4 ) as mediana_humi,
    min(umidade) + 3 * ( ( max(umidade) - min(umidade) ) / 4 ) as terceiroQuartil_humi FROM sensor;`).then(resultados => {
       
    var linha = resultados.recordsets[0][0];
    var temperaturaMedia =
    linha.media_temp.toFixed(2);
    var temperatura_min =
    linha.min_temp.toFixed(2);
    var temperatura_max =
    linha.max_temp.toFixed(2);
    var temperatura_q1T =
    linha.primeiroQuartil_temp.toFixed(2);
    var temperatura_q2T =
    linha.mediana_temp.toFixed(2);
    var temperatura_q3T =
    linha.terceiroQuartil_temp.toFixed(2);

    var umidadeMedia =
    linha.media_umid.toFixed(2);
    var umidade_max =
    linha.max_humi.toFixed(2);
    var umidade_min =
    linha.min_humi.toFixed(2);
    var umidade_q1H =
    linha.primeiroQuartil_humi.toFixed(2);
    var umidade_q2H =
    linha.mediana_humi.toFixed(2);
    var umidade_q3H =
    linha.terceiroQuartil_humi.toFixed(2);


        res.json({temperaturaMedia:temperaturaMedia, umidadeMedia:umidadeMedia, 
            minimoUmi:umidade_min, primeiroQuartilUmi:umidade_q1H, MedianaUmi:umidade_q2H, TerceiroQuartilUmi:umidade_q3H, maximoUmi:umidade_max,
            minimoTemp:temperatura_min, PrimeiroQuartilTemp:temperatura_q1T, MedianaTemp:temperatura_q2T, TerceiroQuartilTemp:temperatura_q3T, maximoTemp:temperatura_max});
    }).catch(error => {
        console.log(error);
        res.status(400).json({"error": `erro na consulta junto ao banco de dados ${error}`});
    });

});



module.exports = router;
