import {SharedController} from '../../../../shared/config/SharedController';
import {Controller, Get, Logger, Query} from '@nestjs/common';
import {MoneyPoolControllerConstants} from '../../../constants/MoneyPoolControllerConstants';
import {ApiAcceptedResponse, ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {AppAuth} from '../../../../../contexts/shared/infrastructure/nestjs/AppAuth';
import {SearchMoneyPoolByIdGetControllerResponse} from './SearchMoneyPoolByIdGetControllerResponse';
import {HeadersConstants} from '../../../../../contexts/shared/domain/constants/HeadersConstants';
import {SearchMoneyPoolByIdGetControllerRequest} from './SearchMoneyPoolByIdGetControllerRequest';
import {MoneyPoolDto} from '../../../../../contexts/money-pool/domain/MoneyPoolDto';
import {
    SearchMoneyPoolByIdQuery
} from '../../../../../contexts/money-pool/application/search/by-id/SearchMoneyPoolByIdQuery';

@Controller(MoneyPoolControllerConstants.PATH)
@ApiTags(MoneyPoolControllerConstants.SWAGGER_TAG)
@ApiBearerAuth(HeadersConstants.APP_KEY)
export class SearchMoneyPoolByIdGetController extends SharedController {

    protected readonly logger: Logger = new Logger(SearchMoneyPoolByIdGetController.name);

    @Get()
    @AppAuth()
    @ApiAcceptedResponse({type: SearchMoneyPoolByIdGetControllerResponse})
    async exec(
        @Query() request: SearchMoneyPoolByIdGetControllerRequest,
    ): Promise<SearchMoneyPoolByIdGetControllerResponse> {
        this.logger.log(`[${this.exec.name}] INIT :: ${JSON.stringify(request)}`);
        const response = new SearchMoneyPoolByIdGetControllerResponse();
        response.data = await this.query<MoneyPoolDto>(new SearchMoneyPoolByIdQuery(
            request.moneyPoolId,
        ));
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return response;
    }
}