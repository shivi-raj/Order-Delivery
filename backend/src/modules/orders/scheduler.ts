import { prisma } from "../../prisma/prismaClient";

export class Scheduler {
    async assignOrders() {
        try {

            const deliveryBoys = await prisma.deliveryBoys.findMany();

            for await (const item of deliveryBoys) {

                const assignedOrdersNotDelievered = await prisma.orders.count({ where: { assignedTo: item.id, isDelivered: false } });
                if (assignedOrdersNotDelievered < item.capacity) {
                    const remainingCapacity = item.capacity - assignedOrdersNotDelievered

                    if (remainingCapacity > 0) {
                        const unassignedOrders = await prisma.orders.findMany({ where: { assignedTo: null } });
                        if (unassignedOrders.length) {
                            console.log('UnassignedOrders Found...');

                            const ordersToAssign = unassignedOrders.slice(0, remainingCapacity).map((item:any) => item?.id);
                             await prisma.orders.updateMany({
                                where: {
                                    id: {
                                        in: ordersToAssign
                                    }
                                },
                                data: {
                                    assignedTo: item.id,
                                    assignedAt: new Date()
                                }
                            });

                            console.log('orders assigned..', ordersToAssign);

                        }
                    }
                }
            }



        }
        catch (error) {
            console.log('Error while assign orders', error);
        }

    }
}