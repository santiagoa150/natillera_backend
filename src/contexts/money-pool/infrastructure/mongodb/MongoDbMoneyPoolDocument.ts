import {MoneyPoolDto} from '../../domain/MoneyPoolDto';
import {Document, Schema} from 'mongoose';

export type MongoDbMoneyPoolDocument = MoneyPoolDto & Document;
export const MoneyPoolSchema: Schema<MoneyPoolDto> = new Schema<MoneyPoolDto>({
    finishDate: {
        type: Date,
        index: true,
    },
    handlingFee: {
        type: Number,
    },
    startDate: {
        type: Date,
        index: true,
    },
    moneyPoolId: {
        type: String,
        unique: true,
        index: true,
    },
    name: {
        type: String,
    },
    status: {
        type: String,
        index: true,
    },
    year: {
        type: Number,
        index: true,
    }
}, {timestamps: true});