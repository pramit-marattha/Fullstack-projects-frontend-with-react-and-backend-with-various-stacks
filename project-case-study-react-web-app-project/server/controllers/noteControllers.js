const Note = require('../models/noteSchema')


createItem = (req, res) => {
    

        const body = req.body

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'Please!! enter a item',
            })
        }
        const note = new Note(body)
    
        if(!note){
            return res.status(400).json({ success: false, error: err })
        }
        note.save().then(() => {
            return res.status(200).json({
                success: true,
                id: note._id,
                message: 'Cheers!! Note is Created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Error!! while creating note',
            });
        });
};


 

getNotes = async (req, res) => {
    await Note.find({}, (err, notes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!notes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Sorry, Item not found` })
        }
        return res.status(200).json({ success: true, data: notes })
    }).catch(err => console.log(err))
}

module.exports = {createItem, getNotes}