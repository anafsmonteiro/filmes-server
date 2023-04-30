import filmes from '../models/Filme.js'

class filmeController {

    static listarFilmes = async (req, res) => {
        try {
            const resultado = await filmes.find();
            res.status(200).json(resultado)
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static listarFilmesPorId = async (req, res) => {
        const { id } = req.params;
    
        try {
            const filmePorId = await filmes.findOne({ _id: id });
            res.status(200).json(filmePorId);
        } catch (err) {
            res.status(400).json({ message: `Falha ao localizar filme: ${err.message}` });
        }
    }

    static adicionarFilme = async (req, res) => {
        let filme = new filmes (req.body)
        try{
            await filme.save()
            res.status(200).send('filme adicionado com sucesso.')
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao adicionar filme.`})
        }
    } 

    static atualizaFilme = async (req, res) => {
        const { id } = req.params;
        const novasInfos = req.body;
    
        try {
            await filmes.updateOne({ _id: id }, novasInfos);
            const filmeAtualizado = await filmes.findOne({ _id: id });
            res.status(200).json(filmeAtualizado);
        } catch (err) {
            res.status(500).json({ message: `Falha ao atualizar filme: ${err.message}` });
        }
    }

    static deletaFilme = async (req, res) => {
        const { id } = req.params;
    
        try {
            await filmes.deleteOne({ _id: id });
            res.status(200).send('Filme deletado com sucesso.');
        } catch (err) {
            res.status(500).json({ message: `Falha ao deletar filme: ${err.message}` });
        }
    }    
}

export default filmeController;