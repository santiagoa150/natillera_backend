import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {SearchActiveMoneyPoolQuery} from './SearchActiveMoneyPoolQuery';
import {MoneyPoolDto} from '../../../domain/MoneyPoolDto';
import {Logger} from '@nestjs/common';
import {SearchActiveMoneyPoolApp} from './SearchActiveMoneyPoolApp';

@QueryHandler(SearchActiveMoneyPoolQuery)
export class SearchActiveMoneyPoolQueryHandler implements IQueryHandler<SearchActiveMoneyPoolQuery, MoneyPoolDto> {

    private readonly logger: Logger = new Logger(SearchActiveMoneyPoolQueryHandler.name);

    constructor(
        private readonly searchActiveMoneyPoolApp: SearchActiveMoneyPoolApp,
    ) {
    }

    async execute(query: SearchActiveMoneyPoolQuery): Promise<MoneyPoolDto> {
        this.logger.log(`[${this.execute.name}] INIT :: query: ${JSON.stringify(query)}`);
        const moneyPoolFound = await this.searchActiveMoneyPoolApp.exec(true);
        const response = moneyPoolFound.toPrimitives();
        this.logger.log(`[${this.execute.name}] FINISH ::`);
        return response;
    }
}