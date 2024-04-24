import { OrderController } from "./controllers/orderController";

export function OrderRoutes(app: any) {
    const orderController = new OrderController();
    app.post('/api/v1/order', orderController.createOrder);
    app.patch('/api/v1/deliver-order/:id', orderController.deliverOrder);
}  