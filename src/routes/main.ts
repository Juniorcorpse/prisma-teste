import { Router } from 'express';
import { createTenant, getAllTenants, getTenantByName } from '../services/tenant';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/tenant', async(req, res) => {
    //vlaidar os dados recebidos

    //criar o tenant
    const tenants = await createTenant({        
            nome: 'Simons Doe',
            cnpj: '1664654680',
            status: false
    });
    if(!tenants) {
        return res.status(500).json({error: 'Erro ao criar o tenant. Verifique se o CNPJ já está cadastrado.'});
    }
    res.status(201).json(tenants) ;
});

mainRouter.post('/tenants', async(req, res) => {
    const tenants = await getAllTenants();
    res.status(201).json(tenants);
});

mainRouter.get('/tenant', async(req, res) => {
    const tenant = await getTenantByName('John Doe');
    if (!tenant) {
        return res.status(401).json({ error: 'Tenant not found' });
    }
    res.json(tenant);
});