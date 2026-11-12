import { Prisma } from "../generated/prisma/client";
import { prisma } from "../libs/prisma";

export const createTenant = async (data: Prisma.TenantCreateInput) => {
    try {
    return await prisma.tenant.create({data});    
} catch (error) {
    return false;
}
};

export const getAllTenants = async () => {
    try {
        return await prisma.tenant.findMany({
            orderBy: {
                id: 'desc'
            },
            //definir quais campos serão retornados com o select
            select: {
                id: true,               
                cnpj: true,
                status: true
            }
        }); 
    } catch (error) {
        return false;
    }
};

export const getTenantByName = async (nome: string) => {
    try {
        return await prisma.tenant.findFirst({
            where: {nome: nome},
            select: {
                id: true,
                nome: true,                
                status: true
            }
        });
    } catch (error) {
        return false;
    }
};

export const updateTenant = async (id: number, status: boolean) => {
    const updateData = await prisma.tenant.update({
        where: { id: 1 },
        data: { nome: 'editado'}
    })
    return updateData;
}