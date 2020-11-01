import { request, Router } from 'express';
import { userController } from '../../useCases/UserUseCase/CreateUser';

const router = Router();

router.post('/create', async (request, response) => {
    await userController.handleRequest(request, response);
});

router.delete('/:id', (request, response) => {

});

export default router;