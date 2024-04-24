import HttpStatus from 'http-status-codes';
import { OrderService } from "../services/orderService";
import { logger } from '../../../libs/logger';


export class OrderController {
    service: OrderService;
    constructor() {
        this.service = new OrderService();
    }

    createOrder = async (req: any, res: any) => {
        try {
            const result = await this.service.createOrder(req);
            logger.info("Order created successfully", result);
            res.success(result, HttpStatus.OK);
        } catch (error: any) {
            res.error(error);
        }
    }

    deliverOrder = async (req: any, res: any) => {
        try {
            const result = await this.service.deliverOrder(req);
            logger.info("Order delivered successfully", result);
            res.success(result, HttpStatus.OK);
        } catch (error: any) {
            res.error(error);
        }
    }

}

