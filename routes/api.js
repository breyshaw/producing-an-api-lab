import { Router } from 'express'
const router = Router()
import * as skatersCtrl from '../controllers/skaters.js'


/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})
// GET	/api/skaters	Retrieve ALL skaters
router.get ('/skaters', skatersCtrl.index)
// GET	/api/skaters/:id	Retrieve a SINGLE skater
router.get ('/skaters/:id', skatersCtrl.show)
// POST	/api/skaters	Add a skater
router.post ('/skaters', skatersCtrl.create)
// PUT	/api/skaters/:id	Update a skater
router.put ('/skaters/:id', skatersCtrl.update)
// DELETE	/api/skaters/:id	Delete a skater
router.delete ('/skaters/:id', skatersCtrl.delete)

export {
  router
}
