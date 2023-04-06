import {MoneyPoolDto} from '../../domain/MoneyPoolDto';
import {Document, Schema} from 'mongoose';

export type MongoDbMoneyPoolDocument = MoneyPoolDto & Document;
export const MoneyPoolSchema: Schema<MoneyPoolDto> = new Schema<MoneyPoolDto>({
    finalMonth: {
        type: Number,
    },
    handlingFee: {
        type: Number,
    },
    initialMonth: {
        type: Number,
    },
    moneyPoolId: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    status: {
        type: String,
    },
    totalMonths: {
        type: Number,
    },
    year: {
        type: Number,
    }
}, {timestamps: true});