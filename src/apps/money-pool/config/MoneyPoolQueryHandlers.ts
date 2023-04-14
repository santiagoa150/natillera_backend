import {
    SearchMoneyPoolByIdQueryHandler
} from '../../../contexts/money-pool/application/search/by-id/SearchMoneyPoolByIdQueryHandler';
import {
    SearchAllMoneyPoolsQueryHandler
} from '../../../contexts/money-pool/application/search/all/SearchAllMoneyPoolsQueryHandler';

export const MoneyPoolQueryHandlers = [
    SearchMoneyPoolByIdQueryHandler,
    SearchAllMoneyPoolsQueryHandler,
];