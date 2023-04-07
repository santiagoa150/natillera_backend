import {Module} from '@nestjs/common';
import {SharedModule} from '../shared/SharedModule';
import {CreateMoneyPoolPostController} from './controllers/create/CreateMoneyPoolPostController';
import {MoneyPoolCommandHandlers} from './config/MoneyPoolCommandHandlers';
import {MoneyPoolProviders} from './config/MoneyPoolProviders';

@Module({
    imports: [SharedModule],
    controllers: [
        CreateMoneyPoolPostController,
    ],
    providers: [
        ...MoneyPoolCommandHandlers,
        ...MoneyPoolProviders,
    ]
})
export class MoneyPoolModule {
}