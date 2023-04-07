import {FactoryProvider} from '@nestjs/common';
import {MongoDbConstantsProvider} from '../../../shared/infrastructure/mongodb/MongoDbConstantsProvider';
import {Connection, Model} from 'mongoose';
import {MongoDbModelNameConstants} from '../../../shared/infrastructure/mongodb/MongoDbModelNameConstants';
import {MoneyPoolSchema, MongoDbMoneyPoolDocument} from './MongoDbMoneyPoolDocument';
import {MongoDbMoneyPoolRepository} from './MongoDbMoneyPoolRepository';

export const MongoDbMoneyPoolProviders: Array<FactoryProvider> = [
    {
        provide: MongoDbConstantsProvider.MONEY_POOL_DOCUMENT,
        useFactory(connection: Connection) {
            return connection.model(MongoDbModelNameConstants.MONEY_POOL, MoneyPoolSchema);
        },
        inject: [
            MongoDbConstantsProvider.DATABASE_CONNECTION,
        ]
    },
    {
        provide: MongoDbMoneyPoolRepository,
        useFactory(model: Model<MongoDbMoneyPoolDocument>) {
            return new MongoDbMoneyPoolRepository(model);
        },
        inject: [
            MongoDbConstantsProvider.MONEY_POOL_DOCUMENT,
        ]
    }
];