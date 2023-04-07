import {Logger} from '@nestjs/common';
import {MoneyPool} from '../../domain/MoneyPool';
import {MoneyPoolDto} from '../../domain/MoneyPoolDto';
import {MoneyPoolId} from '../../domain/MoneyPoolId';
import {MoneyPoolStatusConstants} from '../../domain/constants/MoneyPoolStatusConstants';
import {InvalidMoneyPoolFinishDateException} from '../../domain/exceptions/InvalidMoneyPoolFinishDateException';
import {ErrorMessagesConstants} from '../../../shared/domain/constants/ErrorMessagesConstants';
import {IMoneyPoolRepository} from '../../domain/IMoneyPoolRepository';

export class CreateMoneyPoolApp {

    private readonly logger: Logger = new Logger(CreateMoneyPoolApp.name);

    constructor(
        private readonly repository: IMoneyPoolRepository,
    ) {
    }

    async exec(name: string, year: number, startDate: Date, finishDate: Date, handlingFee: number,): Promise<MoneyPool> {
        this.logger.log(`[${this.exec.name}] INIT :: name: ${name}, year: ${year}, initialMonth: ${startDate}, finalMonth: ${finishDate}, handlingFee: ${handlingFee}`);
        if (finishDate < startDate) {
            throw new InvalidMoneyPoolFinishDateException(ErrorMessagesConstants.MONEY_POOL_FINISH_DATE_MUST_BE_GREATER_THAN_START_DATE);
        }
        const mappedMoneyPool = await this.mapMoneyPool(name, year, startDate, finishDate, handlingFee);
        const created = await this.repository.create(mappedMoneyPool);
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return created;
    }

    async mapMoneyPool(name: string, year: number, startDate: Date, finishDate: Date, handlingFee: number,): Promise<MoneyPoolDto> {
        this.logger.log(`[${this.mapMoneyPool.name}] INIT :: name: ${name}, year: ${year}, initialMonth: ${startDate}, finalMonth: ${finishDate}, handlingFee: ${handlingFee}`);
        const moneyPoolId: string = MoneyPoolId.buildRawId();
        const moneyPool: MoneyPoolDto = {
            finishDate,
            handlingFee,
            startDate,
            moneyPoolId,
            name,
            status: MoneyPoolStatusConstants.IN_PROCESS,
            year
        };
        this.logger.log(`[${this.mapMoneyPool.name}] FINISH ::`);
        return moneyPool;
    }
}