import mongoose from "mongoose";

const filmeSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String},
        descricao: {type: String},
        ano: {type: Number},
        direcao: {type: String},
        studio: {type: String}
    }
)

const filmes = mongoose.model("filmes", filmeSchema)
export default filmes;