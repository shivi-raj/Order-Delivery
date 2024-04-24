
# Order-Delivery

**Project Setup**

- Run command ```npm i``` for installing node_modules
- Create database and change ```DATABASE_URL``` in .env file
- Change directory to ```/src``` then run ```npx prisma db push``` for migrate schema changes in database.
- Create build using command ```npm run build```
- Seed Delivery Boys Data by using command ```npm run seed:deliveryBoys```
- Then start server using command ```npm start```






## API Reference

#### Create order

```http
  POST /api/v1/order
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `amount` | `decimal` | **Required** |

#### Deliver Order

```http
  PATCH /api/v1/deliver-order/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required** |


