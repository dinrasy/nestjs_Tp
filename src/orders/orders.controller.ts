import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';


@Controller('orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService,
    ) {

    }
    @Post()
    createOrder(@Body() orderDto: any) {
        // Logic to create an order
        return this.ordersService.createOrder(orderDto);
    }   
}
