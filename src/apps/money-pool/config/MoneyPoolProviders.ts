import {FactoryProvider} from '@nestjs/common';
import {CreateMoneyPoolApp} from '../../../contexts/money-pool/application/create/CreateMoneyPoolApp';
import {IMoneyPoolRepository} from '../../../contexts/money-pool/domain/IMoneyPoolRepository';
import {
    MongoDbMoneyPoolRepository
} from '../../../contexts/money-pool/infrastructure/mongodb/MongoDbMoneyPoolRepository';

export const MoneyPoolProviders: Array<FactoryProvider> = [
    {
        provide: CreateMoneyPoolApp,
        useFactory: (
            moneyPoolRepository: IMoneyPoolRepository,
        ) => {
            return new CreateMoneyPoolApp(
                moneyPoolRepository,
            );
        },
        inject: [
            MongoDbMoneyPoolRepository,
        ]
    }
];