const router = require("express").Router();
const appClass = require("../db/appClass");


//POST a note
router.post("/add", (req, res) => {
  appClass
    .postNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// GET a note
router.get("/", function (req, res) {
  appClass
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.get("/notes", function (req, res) {
  appClass
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});


// DELETE a note
router.delete("/:id", function (req, res) {
  appClass
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;