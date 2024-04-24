import { Request } from "express";
import { prisma } from "../../../prisma/prismaClient";
export class OrderService {

    async createOrder(req: Request) {
        try {
            const { amount } = req.body;
            const createdItem = await prisma.orders.create({
                data: {
                    amount
                }
            })
            return createdItem;
        } catch (err: any) {
            return err;
        }
    }

    async deliverOrder(req: Request) {
        try {
            const { id } = req.params;
            const updatedRecord = await prisma.orders.update({ where: { id: Number(id) }, data: { isDelivered: true } })
            return updatedRecord;
        } catch (err: any) {
            return err;
        }
    }
}


