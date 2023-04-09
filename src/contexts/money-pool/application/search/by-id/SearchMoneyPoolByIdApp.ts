import {Logger} from '@nestjs/common';
import {MoneyPoolId} from '../../../domain/MoneyPoolId';
import {MoneyPool} from '../../../domain/MoneyPool';
import {IMoneyPoolRepository} from '../../../domain/IMoneyPoolRepository';
import {MoneyPoolNotFoundException} from '../../../domain/exceptions/MoneyPoolNotFoundException';

export class SearchMoneyPoolByIdApp {

    private readonly logger: Logger = new Logger(SearchMoneyPoolByIdApp.name);

    constructor(
        private readonly repository: IMoneyPoolRepository,
    ) {
    }

    async exec(moneyPoolId: MoneyPoolId, throwExceptionIfNotExists?: boolean): Promise<MoneyPool> {
        this.logger.log(`[${this.exec.name}] INIT :: moneyPoolId: ${moneyPoolId.toString()}, throwExceptionIfNotExists: ${throwExceptionIfNotExists}`);
        const moneyPoolFound = await this.repository.searchById(moneyPoolId);
        if (throwExceptionIfNotExists && !moneyPoolFound) {
            throw new MoneyPoolNotFoundException();
        }
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return moneyPoolFound;
    }
}