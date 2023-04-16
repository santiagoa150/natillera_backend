import {PaginationType} from '../../../../shared/domain/PaginationType';
import {Customer} from '../../../domain/Customer';
import {PaginationParam} from '../../../../shared/domain/PaginationParam';
import {Logger} from '@nestjs/common';
import {ICustomerRepository} from '../../../domain/ICustomerRepository';

export class SearchAllCustomersApp {

    private readonly logger: Logger = new Logger(SearchAllCustomersApp.name);

    constructor(
        private readonly repository: ICustomerRepository,
    ) {
    }

    async exec(page: PaginationParam, limit: PaginationParam): Promise<PaginationType<Customer>> {
        this.logger.log(`[${this.exec.name}] INIT :: page: ${page.toNumber()}, limit: ${limit.toNumber()}`);
        const customersFound: PaginationType<Customer> = await this.repository.searchPaginated(page, limit);
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return customersFound;
    }
}