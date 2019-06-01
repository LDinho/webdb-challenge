const express = require('express');

const router = express.Router();

const {

} = require('../helpers/projectDbHelper');

/*
@GET: projects
@PARAMS: none
@ROUTE: "/api/projects"
*/

router.get('/', async (req, res) => {

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
@PARAMS: name[STRING]! and description[STRING]!
@ROUTE: "/api/projects"
*/

router.post('/', async (req, res) => {

})


module.exports = router;
