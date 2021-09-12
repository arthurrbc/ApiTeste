import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/Cadastro', ApiController.createRegistration);
router.get('/Cadastro/:id', ApiController.getRegistration);
router.put('/Cadastro/:id', ApiController.updateRegistration);
router.delete('/Cadastro/:id', ApiController.deleteRegistration);

export default router;