import {SharedController} from '../../../../shared/config/SharedController';
import {Controller, Get, Logger, Query} from '@nestjs/common';
import {MoneyPoolControllerConstants} from '../../../constants/MoneyPoolControllerConstants';
import {ApiAcceptedResponse, ApiBasicAuth, ApiTags} from '@nestjs/swagger';
import {HeadersConstants} from '../../../../../contexts/shared/domain/constants/HeadersConstants';
import {AppAuth} from '../../../../../contexts/shared/infrastructure/nestjs/AppAuth';
import {SearchAllMoneyPoolsGetControllerResponse} from './SearchAllMoneyPoolsGetControllerResponse';
import {MoneyPoolDto} from '../../../../../contexts/money-pool/domain/MoneyPoolDto';
import {SearchAllMoneyPoolsGetControllerRequest} from './SearchAllMoneyPoolsGetControllerRequest';
import {PaginationType} from '../../../../../contexts/shared/domain/PaginationType';
import {
    SearchAllMoneyPoolsQuery
} from '../../../../../contexts/money-pool/application/search/all/SearchAllMoneyPoolsQuery';

@Controller(MoneyPoolControllerConstants.PATH)
@ApiTags(MoneyPoolControllerConstants.SWAGGER_TAG)
@ApiBasicAuth(HeadersConstants.APP_KEY)
export class SearchAllMoneyPoolsGetController extends SharedController {

    protected readonly logger: Logger = new Logger(SearchAllMoneyPoolsGetController.name);

    @Get(MoneyPoolControllerConstants.SEARCH_ALL_MONEY_POOLS)
    @AppAuth()
    @ApiAcceptedResponse({type: SearchAllMoneyPoolsGetControllerResponse})
    async exec(
        @Query() request: SearchAllMoneyPoolsGetControllerRequest,
    ): Promise<SearchAllMoneyPoolsGetControllerResponse> {
        this.logger.log(`[${this.exec.name}] INIT :: request: ${JSON.stringify(request)}`);
        const response = new SearchAllMoneyPoolsGetControllerResponse();
        response.data = await this.query<PaginationType<MoneyPoolDto>>(new SearchAllMoneyPoolsQuery(
            Number(request.page),
            Number(request.limit),
        ));
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return response;
    }
}