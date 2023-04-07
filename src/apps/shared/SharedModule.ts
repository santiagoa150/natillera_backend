import {Module} from '@nestjs/common';
import {MongoDbConnectionModule} from '../../contexts/shared/infrastructure/mongodb/MongoDbConnectionModule';
import {CqrsModule} from '@nestjs/cqrs';

@Module({
    imports: [
        MongoDbConnectionModule,
        CqrsModule,
    ],
    exports: [
        MongoDbConnectionModule,
        CqrsModule,
    ]
})
export class SharedModule {
}