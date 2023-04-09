import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {SearchMoneyPoolByIdQuery} from './SearchMoneyPoolByIdQuery';
import {MoneyPoolDto} from '../../../domain/MoneyPoolDto';
import {Logger} from '@nestjs/common';
import {SearchMoneyPoolByIdApp} from './SearchMoneyPoolByIdApp';
import {MoneyPoolId} from '../../../domain/MoneyPoolId';

@QueryHandler(SearchMoneyPoolByIdQuery)
export class SearchMoneyPoolByIdQueryHandler implements IQueryHandler<SearchMoneyPoolByIdQuery> {

    private readonly logger: Logger = new Logger(SearchMoneyPoolByIdQueryHandler.name);

    constructor(
        private readonly searchMoneyPoolByIdApp: SearchMoneyPoolByIdApp,
    ) {
    }

    async execute(query: SearchMoneyPoolByIdQuery): Promise<MoneyPoolDto> {
        this.logger.log(`[${this.execute.name}] INIT :: query: ${JSON.stringify(query)}`);
        const moneyPoolId = new MoneyPoolId(query.moneyPoolId);
        const moneyPoolFound = await this.searchMoneyPoolByIdApp.exec(moneyPoolId, true);
        const response = moneyPoolFound.toPrimitives();
        this.logger.log(`[${this.execute.name}] FINISH ::`);
        return response;
    }
}