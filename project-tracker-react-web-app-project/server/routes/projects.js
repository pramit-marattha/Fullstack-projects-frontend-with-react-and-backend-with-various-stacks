const router = require('express').Router();
let Project = require('../models/project');

router.route('/').get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newProject = new Project({
    username,
    description,
    duration,
    date,
  });
newProject.save().then(() => res.json('Project added!')).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Project.findById(req.params.id)
    .then(proj => res.json(proj))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Project.findById(req.params.id).then(proj => {
      proj.username = req.body.username;
      proj.description = req.body.description;
      proj.duration = Number(req.body.duration);
      proj.date = Date.parse(req.body.date);
      proj.save().then(() => res.json('Project updated!')).catch(err => res.status(400).json('Error: ' + err));
    }).catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;