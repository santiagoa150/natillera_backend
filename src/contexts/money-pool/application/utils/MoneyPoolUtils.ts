import {MoneyPool} from '../../domain/MoneyPool';
import {Logger} from '@nestjs/common';
import {MoneyPoolNotFoundException} from '../../domain/exceptions/MoneyPoolNotFoundException';

export class MoneyPoolUtils {

    private static logger: Logger = new Logger(MoneyPoolUtils.name);

    public static validateIfMoneyDoesntExists(moneyPool?: MoneyPool, throwExceptionIfNotExists?: boolean): void {
        this.logger.log(`[${this.validateIfMoneyDoesntExists.name}] INIT ::`);
        if (throwExceptionIfNotExists && !moneyPool) {
            throw new MoneyPoolNotFoundException();
        }
        this.logger.log(`[${this.validateIfMoneyDoesntExists.name}] FINISH ::`);
    }
}