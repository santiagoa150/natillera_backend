import {SuccessfulResponse} from '../../../../shared/config/SharedControllerResponses';
import {ApiProperty} from '@nestjs/swagger';
import {MoneyPoolDto} from '../../../../../contexts/money-pool/domain/MoneyPoolDto';
import {MetadataType} from '../../../../../contexts/shared/domain/MetadataType';

class SearchAllMoneyPoolsPaginated {
    @ApiProperty({type: MoneyPoolDto, isArray: true}) data: Array<MoneyPoolDto>;
    @ApiProperty({type: MetadataType}) metadata: MetadataType;
}

export class SearchAllMoneyPoolsGetControllerResponse extends SuccessfulResponse {
    @ApiProperty({type: SearchAllMoneyPoolsPaginated}) data: SearchAllMoneyPoolsPaginated;
}