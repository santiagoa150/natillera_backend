import {
    SearchMoneyPoolByIdQueryHandler
} from '../../../contexts/money-pool/application/search/by-id/SearchMoneyPoolByIdQueryHandler';
import {
    SearchAllMoneyPoolsQueryHandler
} from '../../../contexts/money-pool/application/search/all/SearchAllMoneyPoolsQueryHandler';
import {
    SearchActiveMoneyPoolQueryHandler
} from '../../../contexts/money-pool/application/search/active/SearchActiveMoneyPoolQueryHandler';

export const MoneyPoolQueryHandlers = [
    SearchMoneyPoolByIdQueryHandler,
    SearchAllMoneyPoolsQueryHandler,
    SearchActiveMoneyPoolQueryHandler,
];