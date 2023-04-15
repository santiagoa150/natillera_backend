import {Module} from '@nestjs/common';
import {SharedModule} from '../shared/SharedModule';
import {CustomerCommandHandlers} from './config/CustomerCommandHandlers';
import {CustomerQueryHandlers} from './config/CustomerQueryHandlers';
import {CustomerProviders} from './config/CustomerProviders';
import {CreateOneCustomerPostController} from './controllers/create/one/CreateOneCustomerPostController';

@Module({
    imports: [SharedModule],
    controllers: [
        CreateOneCustomerPostController
    ],
    providers: [
        ...CustomerCommandHandlers,
        ...CustomerQueryHandlers,
        ...CustomerProviders,
    ],
})
export class CustomerModule {
}