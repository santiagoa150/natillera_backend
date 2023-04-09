import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString} from 'class-validator';
import {ErrorMessagesConstants} from '../../../../contexts/shared/domain/constants/ErrorMessagesConstants';

export class RemoveMoneyPoolDeleteControllerRequest {
    @ApiProperty({required: true})
    @IsString({message: ErrorMessagesConstants.MONEY_POOL_ID_MUST_BE_STRING})
    @IsNotEmpty({message: ErrorMessagesConstants.MONEY_POOL_ID_REQUIRED})
        moneyPoolId: string;
}