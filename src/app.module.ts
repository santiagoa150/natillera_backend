import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MoneyPoolModule} from './apps/money-pool/MoneyPoolModule';
import {JoiValidationObject} from './contexts/shared/infrastructure/joi/JoiValidationObject';
import {CustomerModule} from './apps/customer/CustomerModule';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: JoiValidationObject
        }),
        MoneyPoolModule,
        CustomerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
