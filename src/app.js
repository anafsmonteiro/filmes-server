import express from "express";
import db from './config/dbConect.js'
import routes from './routes/index.js'

try { db.once('open', () => { console.log('Conexão com o banco feita com sucesso') }) } catch (error) { db.on("error", console.log.bind(console, error)) }

const app = express();

app.use(express.json())

routes(app)

export default app