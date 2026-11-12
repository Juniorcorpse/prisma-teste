import { Router } from 'express';
import { createTenant, getAllTenants, getTenantByName, updateTenant } from '../services/tenant';

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

mainRouter.get('/tenants', async(req, res) => {
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

mainRouter.put('/tenant', async(req, res) => {
    const result = await updateTenant(Number(req.params.id), true);
    res.json(result);
})