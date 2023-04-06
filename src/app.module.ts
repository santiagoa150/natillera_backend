import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MoneyPoolModule} from './apps/money-pool/MoneyPoolModule';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        MoneyPoolModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
