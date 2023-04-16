import {Logger} from '@nestjs/common';
import {MoneyPool} from '../../domain/MoneyPool';
import {MoneyPoolId} from '../../domain/MoneyPoolId';
import {SearchMoneyPoolByIdApp} from '../search/by-id/SearchMoneyPoolByIdApp';
import {IMoneyPoolRepository} from '../../domain/IMoneyPoolRepository';
import {MoneyPoolNotFoundException} from '../../domain/exceptions/MoneyPoolNotFoundException';
import {ErrorMessagesConstants} from '../../../shared/domain/constants/ErrorMessagesConstants';
import {ErrorStatusCodesConstants} from '../../../shared/domain/constants/ErrorStatusCodesConstants';

export class RemoveMoneyPoolApp {

    private readonly logger: Logger = new Logger(RemoveMoneyPoolApp.name);

    constructor(
        private readonly searchMoneyPoolByIdApp: SearchMoneyPoolByIdApp,
        private readonly repository: IMoneyPoolRepository,
    ) {
    }

    async exec(moneyPoolId: MoneyPoolId, throwExceptionIfCantDelete?: boolean): Promise<MoneyPool> {
        this.logger.log(`[${this.exec.name}] INIT :: moneyPoolId: ${moneyPoolId.toString()}`);
        const moneyPoolFound: MoneyPool = await this.searchMoneyPoolByIdApp.exec(moneyPoolId, true);
        const moneyPoolDeleted: MoneyPool = await this.repository.delete(moneyPoolFound.moneyPoolId);
        if (throwExceptionIfCantDelete && !moneyPoolDeleted) {
            throw new MoneyPoolNotFoundException(
                ErrorMessagesConstants.MONEY_POOL_NOT_DELETED,
                ErrorStatusCodesConstants.MONEY_POOL_NOT_DELETED,
            );
        }
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return moneyPoolDeleted;
    }
}