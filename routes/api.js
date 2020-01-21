const app = require("express").Router();

// GET a note
app.get("/notes", function (req, res) {
  appClass
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

//POST a note
app.post("/notes", (req, res) => {
  appClass
    .postNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});


// DELETE a note
app.delete("/notes/:id", function (req, res) {
  appClass
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = app;