import express from 'express'
import filmes from '../routes/filmesRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Catálogo de filmes" })
    })
    app.use(
        express.json(),
        filmes
    )
}
export default routes;