import express from 'express'
import filmeController from '../controllers/filmesController.js'

const router = express.Router();

router
    .get('/filmes', filmeController.listarFilmes)
    .get('/filmes/:id', filmeController.listarFilmesPorId)
    .post('/filmes', filmeController.adicionarFilme)
    .put('/filmes/:id', filmeController.atualizaFilme)
    .delete('/filmes/:id', filmeController.deletaFilme)


    export default router;