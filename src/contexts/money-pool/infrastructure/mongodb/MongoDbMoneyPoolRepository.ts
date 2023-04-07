import {IMoneyPoolRepository} from '../../domain/IMoneyPoolRepository';
import {Model} from 'mongoose';
import {MongoDbMoneyPoolDocument} from './MongoDbMoneyPoolDocument';
import {Logger} from '@nestjs/common';
import {MoneyPoolDto} from '../../domain/MoneyPoolDto';
import {MoneyPool} from '../../domain/MoneyPool';

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
        const moneyPoolCreated = moneyPoolModel ? MoneyPool.fromPrimitives(moneyPoolModel) : null;
        this.logger.log(`[${this.create.name}] FINISH ::`);
        return moneyPoolCreated;
    }
}