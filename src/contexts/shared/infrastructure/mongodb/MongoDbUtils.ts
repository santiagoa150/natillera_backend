import {PaginationParam} from '../../domain/PaginationParam';
import {PipelineStage} from 'mongoose';
import {MongoDbPaginationResponse} from './MongoDbTypes';
import {PaginationType} from '../../domain/PaginationType';

export class MongoDbUtils {

    public static getDataFromPaginatedResponse<T>(aggregateResponse: MongoDbPaginationResponse<T>): PaginationType<T> {
        return aggregateResponse && aggregateResponse.length > 0 ? aggregateResponse[0] : new PaginationType<T>();
    }

    public static buildPaginatedQuery(pageParam: PaginationParam, limitParam: PaginationParam): Array<PipelineStage> {
        const aggregate: Array<PipelineStage> = [], data = [], metadata = [];
        const page: number = pageParam.toNumber(), limit: number = limitParam.toNumber();
        const skip: number = Math.round((page - 1) * limit);
        data.push({$skip: skip});
        data.push({$limit: limit});
        metadata.push({$count: 'total'});
        metadata.push({$addFields: {page}});
        metadata.push({$addFields: {totalPages: {$ceil: {$divide: ['$total', limit]}}}});
        aggregate.push({$sort: {createdAt: -1}});
        aggregate.push({$facet: {data, metadata}});
        aggregate.push({$unwind: {path: '$metadata'}});
        return aggregate;
    }
}