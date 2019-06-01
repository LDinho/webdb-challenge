const express = require('express');

const router = express.Router();

const {

} = require('../helpers/actionDbHelper');

/*
@GET: actions
@PARAMS: none
@ROUTE: "/api/actions"
*/

router.get('/', async (req, res) => {

});

/*
@GET: action
@PARAMS: id[STRING]!
@ROUTE: "/api/actions/:id"
*/

router.get('/:id', async (req, res) => {

});


/*
@POST: create new action
@PARAMS: description[STRING]! project_id[INT]
@ROUTE: "/api/actions"
*/

router.post('/', async (req, res) => {

})


module.exports = router;
