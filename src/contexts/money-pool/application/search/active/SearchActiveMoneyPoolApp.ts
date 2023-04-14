import {MoneyPool} from '../../../domain/MoneyPool';
import {Logger} from '@nestjs/common';
import {IMoneyPoolRepository} from '../../../domain/IMoneyPoolRepository';
import {MoneyPoolUtils} from '../../utils/MoneyPoolUtils';

export class SearchActiveMoneyPoolApp {

    private readonly logger: Logger = new Logger(SearchActiveMoneyPoolApp.name);

    constructor(
        private readonly repository: IMoneyPoolRepository,
    ) {
    }

    async exec(throwExceptionIfNotExists?: boolean): Promise<MoneyPool> {
        this.logger.log(`[${this.exec.name}] INIT :: throwExceptionIfNotExists: ${throwExceptionIfNotExists}`);
        const moneyPoolFound: MoneyPool = await this.repository.searchActive();
        MoneyPoolUtils.validateIfMoneyDoesntExists(moneyPoolFound, throwExceptionIfNotExists);
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return moneyPoolFound;
    }
}