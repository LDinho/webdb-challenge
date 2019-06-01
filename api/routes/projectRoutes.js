const express = require('express');

const router = express.Router();

const {
  getProjects,
  addProject,
  getProject,

} = require('../helpers/projectDbHelper');

/*
@GET: projects
@PARAMS: none
@ROUTE: "/api/projects"
*/

router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();

    if (projects.length) {
      res.status(200).json(projects)

    } else {
      res.status(404).json({message: `No projects found`})

    }
  }
  catch (err) {
    res.status(500).json({error: `Unable to retrieve projects`})
  }

});

/*
@GET: project
@PARAMS: id[STRING]!
@ROUTE: "/api/projects/:id"
*/

router.get('/:id', async (req, res) => {

});


/*
@POST: create new project
@PARAMS: project[Obj]!
@ROUTE: "/api/projects"
*/

router.post('/', async (req, res) => {
  const newProject = req.body;

  const { name, description} = newProject;

  try {

    if (!name || !description) {
      return res.status(400)
        .json({
          errorMessage: "name/description missing."
        });
    }

    const projectAdded = await addProject(newProject);

    return res.status(201).json(projectAdded);

  }
  catch (err) {
    res.status(500).json({error: `Server error`})
  }

})


module.exports = router;
