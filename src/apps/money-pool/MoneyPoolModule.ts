import {Module} from '@nestjs/common';
import {SharedModule} from '../shared/SharedModule';

@Module({
    imports: [SharedModule],
})
export class MoneyPoolModule {
}