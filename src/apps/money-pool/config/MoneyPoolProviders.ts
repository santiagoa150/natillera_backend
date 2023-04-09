import {FactoryProvider} from '@nestjs/common';
import {CreateMoneyPoolApp} from '../../../contexts/money-pool/application/create/CreateMoneyPoolApp';
import {IMoneyPoolRepository} from '../../../contexts/money-pool/domain/IMoneyPoolRepository';
import {
    MongoDbMoneyPoolRepository
} from '../../../contexts/money-pool/infrastructure/mongodb/MongoDbMoneyPoolRepository';
import {SearchMoneyPoolByIdApp} from '../../../contexts/money-pool/application/search/by-id/SearchMoneyPoolByIdApp';

export const MoneyPoolProviders: Array<FactoryProvider> = [
    {
        provide: SearchMoneyPoolByIdApp,
        useFactory: (
            moneyPoolRepository: IMoneyPoolRepository,
        ) => {
            return new SearchMoneyPoolByIdApp(
                moneyPoolRepository,
            );
        },
        inject: [
            MongoDbMoneyPoolRepository,
        ]
    },
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
    },
];