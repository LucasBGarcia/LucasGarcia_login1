const { Router } = require('express')

const AlunoController = require('./controller/AlunoController')

const router = Router()

router.post('/', AlunoController.store)
router.get('/', AlunoController.index)

module.exports = router