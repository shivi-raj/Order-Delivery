import { logger } from "../../libs/logger";
import { prisma } from "../prismaClient";

(async () => {
    try {

        // Seed Delivery Boys
        const created = await prisma.deliveryBoys.createMany({
            data: [
                { name: "A", capacity: 2 },
                { name: "B", capacity: 4 },
                { name: "C", capacity: 5 },
                { name: "D", capacity: 3 },
            ],
        });
        logger.info('deliveryBoys seeded successfully:', created);
    } catch (error) {
        logger.error('Error seeding deliveryBoys:', error);
    }

})();
