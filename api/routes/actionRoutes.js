const express = require('express');

const router = express.Router();

const {
  addAction,
  getActions,

} = require('../helpers/actionDbHelper');

/*
@GET: actions
@PARAMS: none
@ROUTE: "/api/actions"
*/

router.get('/', async (req, res) => {
  try {
    const actions = await getActions();

    if (actions.length) {
      res.status(200).json(actions)

    } else {
      res.status(404).json({message: `No actions found`})

    }
  }
  catch (err) {
    res.status(500).json({error: `Unable to retrieve projects`})
  }

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

  const newAction = req.body;

  try {
    const { description, project_id } = newAction; // dish id is required


    if (!description || !project_id) { // dish id is required
      return res.status(400)
        .json({
          error: 'description or project id missing'
        });
    }
      const actionAdded = await addAction(newAction);

      return res.status(201).json(actionAdded);

  }
  catch (err) {
    return res.status(500)
      .json({
        err,
        message: 'Unable to process request'
      })
  }

})


module.exports = router;
