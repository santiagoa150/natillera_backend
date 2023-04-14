import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {SearchAllMoneyPoolsQuery} from './SearchAllMoneyPoolsQuery';
import {PaginationType} from '../../../../shared/domain/PaginationType';
import {MoneyPoolDto} from '../../../domain/MoneyPoolDto';
import {Logger} from '@nestjs/common';
import {SearchAllMoneyPoolsApp} from './SearchAllMoneyPoolsApp';
import {PaginationParam} from '../../../../shared/domain/PaginationParam';
import {MoneyPool} from '../../../domain/MoneyPool';

@QueryHandler(SearchAllMoneyPoolsQuery)
export class SearchAllMoneyPoolsQueryHandler implements IQueryHandler<SearchAllMoneyPoolsQuery, PaginationType<MoneyPoolDto>> {

    private readonly logger = new Logger(SearchAllMoneyPoolsQueryHandler.name);

    constructor(
        private readonly searchAllMoneyPoolsApp: SearchAllMoneyPoolsApp,
    ) {
    }

    async execute(query: SearchAllMoneyPoolsQuery): Promise<PaginationType<MoneyPoolDto>> {
        this.logger.log(`[${this.execute.name}] INIT :: query: ${JSON.stringify(query)}`);
        const moneyPoolsFound: PaginationType<MoneyPool> = await this.searchAllMoneyPoolsApp.exec(
            new PaginationParam(query.page),
            new PaginationParam(query.limit),
        );
        const response: PaginationType<MoneyPoolDto> = new PaginationType<MoneyPoolDto>();
        response.data = moneyPoolsFound.data.map((mP) => mP.toPrimitives());
        response.metadata = moneyPoolsFound.metadata;
        this.logger.log(`[${this.execute.name}] FINISH :: Total Money Pools Found: ${response.data.length}`);
        return response;
    }
}