import {PaginationType} from '../../domain/PaginationType';

export type MongoDbPaginationResponse<T> = Array<PaginationType<T>>;