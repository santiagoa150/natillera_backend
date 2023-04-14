import {SuccessfulResponse} from '../../shared/config/./SharedControllerResponses';
import {ApiProperty} from '@nestjs/swagger';
import {MoneyPoolDto} from '../../../contexts/money-pool/domain/MoneyPoolDto';

export class SearchOneMoneyPoolResponse extends SuccessfulResponse {
    @ApiProperty() data: MoneyPoolDto;
}