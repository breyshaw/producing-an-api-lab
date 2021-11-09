import { Router } from 'express'
const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

// GET	/api/skaters	Retrieve ALL puppies
// GET	/api/skaters/:id	Retrieve a SINGLE puppy
// POST	/api/skaters	Add a puppy
// PUT	/api/skaters/:id	Update a puppy
// DELETE	/api/skaters/:id	Delete a puppy

export {
  router
}
