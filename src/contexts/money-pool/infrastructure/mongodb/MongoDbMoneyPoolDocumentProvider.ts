import {FactoryProvider} from '@nestjs/common';
import {MongoDbConstantsProvider} from '../../../shared/infrastructure/mongodb/MongoDbConstantsProvider';
import {Connection} from 'mongoose';
import {MongoDbModelNameConstants} from '../../../shared/infrastructure/mongodb/MongoDbModelNameConstants';
import {MoneyPoolSchema} from './MongoDbMoneyPoolDocument';

export const MongoDbMoneyPoolDocumentProvider: FactoryProvider = {

    provide: MongoDbConstantsProvider.MONEY_POOL_DOCUMENT,
    useFactory(connection: Connection) {
        return connection.model(MongoDbModelNameConstants.MONEY_POOL, MoneyPoolSchema);
    },
    inject: [
        MongoDbConstantsProvider.DATABASE_CONNECTION,
    ]
};