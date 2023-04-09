import {IMoneyPoolRepository} from '../../domain/IMoneyPoolRepository';
import {Model} from 'mongoose';
import {MongoDbMoneyPoolDocument} from './MongoDbMoneyPoolDocument';
import {Logger} from '@nestjs/common';
import {MoneyPoolDto} from '../../domain/MoneyPoolDto';
import {MoneyPool} from '../../domain/MoneyPool';
import {MoneyPoolId} from '../../domain/MoneyPoolId';

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

    async searchById(moneyPoolId: MoneyPoolId): Promise<MoneyPool> {
        this.logger.log(`[${this.searchById.name}] INIT :: moneyPoolId: ${moneyPoolId.toString()}`);
        const moneyPoolFound: MoneyPoolDto = await this.moneyPoolModel.findOne({moneyPoolId: moneyPoolId.toString()});
        const moneyPoolMapped: MoneyPool = moneyPoolFound ? MoneyPool.fromPrimitives(moneyPoolFound) : null;
        this.logger.log(`[${this.searchById.name}] FINISH ::`);
        return moneyPoolMapped;
    }
}