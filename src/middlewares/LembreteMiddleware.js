const {validate: isUuid} = require('uuid');
const Lembrete = require('../models/Lembrete')

module.exports = {
    async validateId(request, response, next) {
        const {id} = request.params;

        if(!isUuid(id)) 
            return response.status(400).json({error: 'Invalid id'});

        try {
            const lembrete = await Lembrete.findById(id);
            response.lembrete = lembrete; //declarando que no response há um lembrete, para ser acessado pelo Controller

            if(!lembrete)
                return response.status(404).json({error: 'Lembrete not found'})

        } catch (err) {
            return response.status(500).json({error: err.message});
        }

        next();
               
    }
}