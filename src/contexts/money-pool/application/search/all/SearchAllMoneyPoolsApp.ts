import {Logger} from '@nestjs/common';
import {PaginationType} from '../../../../shared/domain/PaginationType';
import {MoneyPool} from '../../../domain/MoneyPool';
import {PaginationParam} from '../../../../shared/domain/PaginationParam';
import {IMoneyPoolRepository} from '../../../domain/IMoneyPoolRepository';

export class SearchAllMoneyPoolsApp {

    private readonly logger: Logger = new Logger(SearchAllMoneyPoolsApp.name);

    constructor(
        private readonly repository: IMoneyPoolRepository,
    ) {
    }

    async exec(page: PaginationParam, limit: PaginationParam,): Promise<PaginationType<MoneyPool>> {
        this.logger.log(`[${this.exec.name}] INIT :: page: ${page.toNumber()}, limit: ${limit.toNumber()}`);
        const moneyPoolsFound: PaginationType<MoneyPool> = await this.repository.searchPaginated(page, limit);
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return moneyPoolsFound;
    }
}