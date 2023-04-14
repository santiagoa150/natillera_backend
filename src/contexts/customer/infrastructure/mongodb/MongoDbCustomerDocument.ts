import {CustomerDto} from '../../domain/CustomerDto';
import {Schema} from 'mongoose';

export type MongoDbCustomerDocument = CustomerDto & Document;

export const CustomerSchema: Schema<CustomerDto> = new Schema<CustomerDto>(
    {
        customerId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        status: {
            type: String,
            required: true,
            index: true,
        },
        middleName: {
            type: String,
            required: false,
        },
        secondLastName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: false,
        },
        registeredAt: {
            type: Date,
            required: true,
            index: true,
        },
        firstName: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);