const { v4: uuid } = require('uuid');
const Lembrete = require('../models/Lembrete');

module.exports = {
    // Lista todos os lembretes
    async index(request, response) {
        try{
            const lembretes = await Lembrete.find();
            return response.status(200).json(lembretes);
        } catch(err) {
            response.status(500).json({error: err.message});
        }
    },

    // Lista UM lembrete
    async findById(request, response) {
        try{
            const lembretes = await Lembrete.findById(response.lembrete);
            return response.status(200).json(lembretes);
        } catch(err) {
            response.status(500).json({error: err.message});
        }
    },

    async store(request, response) {
        const { title, content, priority } = request.body;

        if( !title || !content || !priority) {
            return response.status(400).json({ error: "Missing title, content or priority" });
        }

        const lembrete = new Lembrete({
            _id: uuid(),
            title,
            content,
            priority,
        });

        try {
            await lembrete.save();

            return response.status(201).json({ message: "Lembrete adicionado com sucesso!" });
        } catch (err) {
            response.status(400).json({ error: err.message });
        }
    },

    async update(request, response) {
        const { title, content, priority } = request.body;

        if(!title && !content && !priority) {
            return response.status(400).json({ error: "You must inform a new title, content or priority" });
        }

        if(title) response.lembrete.title = title;
        if(content) response.lembrete.content = content;
        if(priority) response.lembrete.priority = priority;

        try {
            await response.lembrete.save();
            response.status(200).json({ message: "Lembrete update successfully!" })

        } catch(err) {
            response.status(500).json({ error: err.message });
        }
    },

    async delete(request, response) {
        try {
            await response.lembrete.remove();
            return response.status(200).json({message: "Lembrete deleted successfully!"});

        } catch(err) {
            return response.status(500).json({ error: err.message });
        }
    }
}