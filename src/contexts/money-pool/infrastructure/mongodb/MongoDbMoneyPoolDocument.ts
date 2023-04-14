import {MoneyPoolDto} from '../../domain/MoneyPoolDto';
import {Document, Schema} from 'mongoose';

export type MongoDbMoneyPoolDocument = MoneyPoolDto & Document;
export const MoneyPoolSchema: Schema<MoneyPoolDto> = new Schema<MoneyPoolDto>({
    finishDate: {
        type: Date,
        index: true,
        required: true,
    },
    handlingFee: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        index: true,
        required: true,
    },
    moneyPoolId: {
        type: String,
        unique: true,
        index: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        index: true,
        required: true,
    },
    year: {
        type: Number,
        index: true,
        required: true,
    }
}, {timestamps: true});