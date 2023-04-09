import {SuccessfulResponse} from '../../../../shared/constants/SharedResponsesConstants';
import {ApiProperty} from '@nestjs/swagger';
import {MoneyPoolDto} from '../../../../../contexts/money-pool/domain/MoneyPoolDto';

export class SearchMoneyPoolByIdGetControllerResponse extends SuccessfulResponse {
    @ApiProperty() data: MoneyPoolDto;
}