import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class OrdersService {
    constructor(
        @Inject(forwardRef(() => NotificationsService))
        private readonly notificationsService: NotificationsService,
    ) {}

    createOrder(orderDto: any) {
        this.notificationsService.notify('order_created', {
            order: orderDto,
        });
        return {status: 'Order accepted', order: orderDto}
    }
}
