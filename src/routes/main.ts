import { Router } from 'express';
import { prisma } from '../libs/prisma';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/tenant', async(req, res) => {
    const users = await prisma.tenant.create({
        data: {
            nome: 'John Doe',
            cnpj: '1654654686',

        }
    });
    res.json(users) ;
});