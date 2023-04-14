import {FactoryProvider} from '@nestjs/common';
import {CreateMoneyPoolApp} from '../../../contexts/money-pool/application/create/CreateMoneyPoolApp';
import {IMoneyPoolRepository} from '../../../contexts/money-pool/domain/IMoneyPoolRepository';
import {
    MongoDbMoneyPoolRepository
} from '../../../contexts/money-pool/infrastructure/mongodb/MongoDbMoneyPoolRepository';
import {SearchMoneyPoolByIdApp} from '../../../contexts/money-pool/application/search/by-id/SearchMoneyPoolByIdApp';
import {RemoveMoneyPoolApp} from '../../../contexts/money-pool/application/remove/RemoveMoneyPoolApp';
import {SearchAllMoneyPoolsApp} from '../../../contexts/money-pool/application/search/all/SearchAllMoneyPoolsApp';
import {
    SearchActiveMoneyPoolApp
} from '../../../contexts/money-pool/application/search/active/SearchActiveMoneyPoolApp';

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
        provide: SearchActiveMoneyPoolApp,
        useFactory: (
            repository: IMoneyPoolRepository,
        ) => {
            return new SearchActiveMoneyPoolApp(
                repository,
            );
        },
        inject: [
            MongoDbMoneyPoolRepository,
        ]
    },
    {
        provide: SearchAllMoneyPoolsApp,
        useFactory: (
            repository: IMoneyPoolRepository,
        ) => {
            return new SearchAllMoneyPoolsApp(
                repository,
            );
        },
        inject: [
            MongoDbMoneyPoolRepository,
        ]
    },
    {
        provide: CreateMoneyPoolApp,
        useFactory: (
            searchActiveMoneyPoolApp: SearchActiveMoneyPoolApp,
            moneyPoolRepository: IMoneyPoolRepository,
        ) => {
            return new CreateMoneyPoolApp(
                searchActiveMoneyPoolApp,
                moneyPoolRepository,
            );
        },
        inject: [
            SearchActiveMoneyPoolApp,
            MongoDbMoneyPoolRepository,
        ]
    },
    {
        provide: RemoveMoneyPoolApp,
        useFactory: (
            searchMoneyPoolByIdApp: SearchMoneyPoolByIdApp,
            repository: IMoneyPoolRepository,
        ) => {
            return new RemoveMoneyPoolApp(
                searchMoneyPoolByIdApp,
                repository,
            );
        },
        inject: [
            SearchMoneyPoolByIdApp,
            MongoDbMoneyPoolRepository,
        ]
    },
];