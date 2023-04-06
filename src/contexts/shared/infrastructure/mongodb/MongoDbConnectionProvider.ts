import {FactoryProvider} from '@nestjs/common';
import * as mongoose from 'mongoose';
import {Connection} from 'mongoose';
import {MongoDbConstantsProvider} from './MongoDbConstantsProvider';

export const MongoDbConnectionProvider: FactoryProvider<Connection> = {
    provide: MongoDbConstantsProvider.DATABASE_CONNECTION,
    useFactory: () => {
        return mongoose.createConnection(process.env.MONGODB_URI);
    },
};