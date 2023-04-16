import {Module} from '@nestjs/common';
import {SharedModule} from '../shared/SharedModule';
import {CustomerCommandHandlers} from './config/CustomerCommandHandlers';
import {CustomerQueryHandlers} from './config/CustomerQueryHandlers';
import {CustomerProviders} from './config/CustomerProviders';
import {CreateOneCustomerPostController} from './controllers/create/one/CreateOneCustomerPostController';
import {SearchCustomerByIdGetController} from './controllers/search/by-id/SearchCustomerByIdGetController';
import {SearchAllCustomersGetController} from './controllers/search/all/SearchAllCustomersGetController';

@Module({
    imports: [SharedModule],
    controllers: [
        CreateOneCustomerPostController,
        SearchCustomerByIdGetController,
        SearchAllCustomersGetController,
    ],
    providers: [
        ...CustomerCommandHandlers,
        ...CustomerQueryHandlers,
        ...CustomerProviders,
    ],
})
export class CustomerModule {
}