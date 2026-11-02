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