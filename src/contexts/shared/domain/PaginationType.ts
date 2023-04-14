import {MetadataType} from './MetadataType';

export class PaginationType<T> {
    data: Array<T> = [];
    metadata: MetadataType = new MetadataType();
}