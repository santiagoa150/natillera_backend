import {Module} from '@nestjs/common';
import {SharedModule} from '../shared/SharedModule';
import {CreateMoneyPoolPostController} from './controllers/create/CreateMoneyPoolPostController';
import {MoneyPoolCommandHandlers} from './config/MoneyPoolCommandHandlers';
import {MoneyPoolProviders} from './config/MoneyPoolProviders';
import {SearchMoneyPoolByIdGetController} from './controllers/search/by-id/SearchMoneyPoolByIdGetController';
import {MoneyPoolQueryHandlers} from './config/MoneyPoolQueryHandlers';
import {RemoveMoneyPoolDeleteController} from './controllers/remove/RemoveMoneyPoolDeleteController';
import {SearchAllMoneyPoolsGetController} from './controllers/search/all/SearchAllMoneyPoolsGetController';

@Module({
    imports: [SharedModule],
    controllers: [
        CreateMoneyPoolPostController,
        SearchAllMoneyPoolsGetController,
        SearchMoneyPoolByIdGetController,
        RemoveMoneyPoolDeleteController,
    ],
    providers: [
        ...MoneyPoolCommandHandlers,
        ...MoneyPoolQueryHandlers,
        ...MoneyPoolProviders,
    ]
})
export class MoneyPoolModule {
}