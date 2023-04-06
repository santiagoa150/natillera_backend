import {Module} from '@nestjs/common';
import {MongoDbConnectionProvider} from './MongoDbConnectionProvider';
import {
    MongoDbMoneyPoolDocumentProvider
} from '../../../money-pool/infrastructure/mongodb/MongoDbMoneyPoolDocumentProvider';

@Module({
    providers: [
        MongoDbConnectionProvider,
        MongoDbMoneyPoolDocumentProvider,
    ],
    exports: [
        MongoDbConnectionProvider,
        MongoDbMoneyPoolDocumentProvider,
    ],
})
export class MongoDbConnectionModule {
}