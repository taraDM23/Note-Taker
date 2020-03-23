const router = require("express").Router();
const appClass = require("../db/appClass");

// GET a note
router.get("/notes", function (req, res) {
  appClass
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

//POST a note
router.post("/notes", (req, res) => {
  appClass
    .postNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});


// DELETE a note
router.delete("/notes/:id", function (req, res) {
  appClass
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;