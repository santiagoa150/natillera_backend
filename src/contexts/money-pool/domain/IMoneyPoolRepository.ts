import {MoneyPoolDto} from './MoneyPoolDto';
import {MoneyPool} from './MoneyPool';
import {MoneyPoolId} from './MoneyPoolId';
import {PaginationParam} from '../../shared/domain/PaginationParam';
import {PaginationType} from '../../shared/domain/PaginationType';

export interface IMoneyPoolRepository {
    create(moneyPool: MoneyPoolDto): Promise<MoneyPool>;

    delete(moneyPoolId: MoneyPoolId): Promise<MoneyPool>;

    searchById(moneyPoolId: MoneyPoolId): Promise<MoneyPool>;

    searchPaginated(page: PaginationParam, limit: PaginationParam): Promise<PaginationType<MoneyPool>>;
}