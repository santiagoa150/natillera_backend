import {IMoneyPoolRepository} from '../../domain/IMoneyPoolRepository';
import {Model} from 'mongoose';
import {MongoDbMoneyPoolDocument} from './MongoDbMoneyPoolDocument';
import {Logger} from '@nestjs/common';
import {MoneyPoolDto} from '../../domain/MoneyPoolDto';
import {MoneyPool} from '../../domain/MoneyPool';
import {MoneyPoolId} from '../../domain/MoneyPoolId';
import {PaginationParam} from '../../../shared/domain/PaginationParam';
import {PaginationType} from '../../../shared/domain/PaginationType';
import {MongoDbUtils} from '../../../shared/infrastructure/mongodb/MongoDbUtils';
import {MongoDbPaginationResponse} from '../../../shared/infrastructure/mongodb/MongoDbTypes';

export class MongoDbMoneyPoolRepository implements IMoneyPoolRepository {
    private readonly logger: Logger = new Logger(MongoDbMoneyPoolRepository.name);

    constructor(
        private readonly moneyPoolModel: Model<MongoDbMoneyPoolDocument>
    ) {
    }

    async create(moneyPool: MoneyPoolDto): Promise<MoneyPool> {
        this.logger.log(`[${this.create.name}] INIT :: Money Pool To Create: ${JSON.stringify(moneyPool)}`);
        const moneyPoolModel = new this.moneyPoolModel(moneyPool);
        await moneyPoolModel.save();
        const moneyPoolCreated: MoneyPool = moneyPoolModel ? MoneyPool.fromPrimitives(moneyPoolModel) : null;
        this.logger.log(`[${this.create.name}] FINISH ::`);
        return moneyPoolCreated;
    }

    async delete(moneyPoolId: MoneyPoolId): Promise<MoneyPool> {
        this.logger.log(`[${this.delete.name}] INIT :: moneyPoolId: ${moneyPoolId.toString()}`);
        const moneyPoolDeleted: MoneyPoolDto = await this.moneyPoolModel.findOneAndDelete({moneyPoolId: moneyPoolId.toString()});
        const moneyPoolMapped: MoneyPool = moneyPoolDeleted ? MoneyPool.fromPrimitives(moneyPoolDeleted) : null;
        this.logger.log(`[${this.delete.name}] FINISH ::`);
        return moneyPoolMapped;
    }

    async searchById(moneyPoolId: MoneyPoolId): Promise<MoneyPool> {
        this.logger.log(`[${this.searchById.name}] INIT :: moneyPoolId: ${moneyPoolId.toString()}`);
        const moneyPoolFound: MoneyPoolDto = await this.moneyPoolModel.findOne({moneyPoolId: moneyPoolId.toString()});
        const moneyPoolMapped: MoneyPool = moneyPoolFound ? MoneyPool.fromPrimitives(moneyPoolFound) : null;
        this.logger.log(`[${this.searchById.name}] FINISH ::`);
        return moneyPoolMapped;
    }

    async searchPaginated(page: PaginationParam, limit: PaginationParam): Promise<PaginationType<MoneyPool>> {
        this.logger.log(`[${this.searchPaginated.name}] INIT :: page: ${page.toNumber()}, limit: ${limit.toNumber()}`);
        const query = MongoDbUtils.buildPaginatedQuery(page, limit);
        const aggregateResponse: MongoDbPaginationResponse<MoneyPoolDto> = await this.moneyPoolModel.aggregate(query);
        const mappedAggregateResponse: PaginationType<MoneyPoolDto> = MongoDbUtils.getDataFromPaginatedResponse<MoneyPoolDto>(aggregateResponse);
        const response: PaginationType<MoneyPool> = new PaginationType<MoneyPool>();
        response.data = mappedAggregateResponse.data.map(MoneyPool.fromPrimitives);
        response.metadata = mappedAggregateResponse.metadata;
        this.logger.log(`[${this.searchPaginated.name}] FINISH ::`);
        return response;
    }
}