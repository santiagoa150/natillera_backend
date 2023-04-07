import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MoneyPoolModule} from './apps/money-pool/MoneyPoolModule';
import {JoiValidationObject} from './contexts/shared/infrastructure/joi/JoiValidationObject';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: JoiValidationObject
        }),
        MoneyPoolModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
