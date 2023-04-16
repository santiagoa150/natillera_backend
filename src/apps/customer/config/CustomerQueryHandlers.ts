import {
    SearchCustomerByIdQueryHandler
} from '../../../contexts/customer/application/search/by-id/SearchCustomerByIdQueryHandler';
import {
    SearchAllCustomersQueryHandler
} from '../../../contexts/customer/application/search/all/SearchAllCustomersQueryHandler';

export const CustomerQueryHandlers = [
    SearchCustomerByIdQueryHandler,
    SearchAllCustomersQueryHandler,
];