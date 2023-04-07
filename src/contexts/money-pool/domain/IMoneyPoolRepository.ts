import {MoneyPoolDto} from './MoneyPoolDto';
import {MoneyPool} from './MoneyPool';

export interface IMoneyPoolRepository {
    create(moneyPool: MoneyPoolDto): Promise<MoneyPool>;
}