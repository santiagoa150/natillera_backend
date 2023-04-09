import {MoneyPoolDto} from './MoneyPoolDto';
import {MoneyPool} from './MoneyPool';
import {MoneyPoolId} from './MoneyPoolId';

export interface IMoneyPoolRepository {
    create(moneyPool: MoneyPoolDto): Promise<MoneyPool>;

    searchById(moneyPoolId: MoneyPoolId): Promise<MoneyPool>;
}