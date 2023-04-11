const router = require('express').Router()
// const path = require('path');
// const fs = require('fs')
const store = require('../db/store')
// const { v4: uuidv4 } = require('uuid');
// make a variable that holds require('../db/db.json)
// var db = require('../db/db.json')



// GET the notes from db/db.json to render (res. something) - /api/notes
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

// POST that creates a note from the req.body and then writes to the db file (fs.writefFileSync) - /api/notes
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

   
   
    // fs.readFile('../db/db.json').then(data => fs.writeFile)

// If you are going to do delte note, give that note a id value (body.id = something, maybe db.length)
// if you want to use a generated id, look into UUIDV4, you will need to npm i uuid


// DELETE that finds the id equal to the req.params.id(url) and splices the note from the db array
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
// and then updates the db filew using fs.writeFileSync
module.exports = router