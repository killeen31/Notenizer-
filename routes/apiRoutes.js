const router = require('express').Router()
const store = require('../db/store')

router.get('/notes', async (req, res) => {
    store
    .getNotes()
    .then(notes => {
        res.json(notes)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/notes', (req, res) => {
    store 
    .addNote(req.body)
    .then(notes => {
        res.json(notes)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
router.delete('/notes/:id', (req, res) => {
    store
    .removeNote(req.params.id)
    .then(() => res.json({
        ok: true
    }))
    .catch(err =>{
        res.status(500).json(err)
    })

});
module.exports = router