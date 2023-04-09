import {SharedController} from '../../../shared/config/SharedController';
import {Body, Controller, Delete, Logger} from '@nestjs/common';
import {MoneyPoolControllerConstants} from '../../constants/MoneyPoolControllerConstants';
import {ApiAcceptedResponse, ApiBasicAuth, ApiTags} from '@nestjs/swagger';
import {HeadersConstants} from '../../../../contexts/shared/domain/constants/HeadersConstants';
import {AppAuth} from '../../../../contexts/shared/infrastructure/nestjs/AppAuth';
import {SuccessfulResponse} from '../../../shared/constants/SharedResponsesConstants';
import {RemoveMoneyPoolDeleteControllerRequest} from './RemoveMoneyPoolDeleteControllerRequest';
import {RemoveMoneyPoolCommand} from '../../../../contexts/money-pool/application/remove/RemoveMoneyPoolCommand';
import {MoneyPoolDto} from '../../../../contexts/money-pool/domain/MoneyPoolDto';

@Controller(MoneyPoolControllerConstants.PATH)
@ApiTags(MoneyPoolControllerConstants.SWAGGER_TAG)
@ApiBasicAuth(HeadersConstants.APP_KEY)
export class RemoveMoneyPoolDeleteController extends SharedController {
    protected readonly logger: Logger = new Logger(RemoveMoneyPoolDeleteController.name);

    @Delete()
    @AppAuth()
    @ApiAcceptedResponse({type: SuccessfulResponse})
    async exec(
        @Body() request: RemoveMoneyPoolDeleteControllerRequest,
    ): Promise<SuccessfulResponse> {
        this.logger.log(`[${this.exec.name}] INIT :: request: ${JSON.stringify(request)}`);
        const response = new SuccessfulResponse();
        await this.dispatch<MoneyPoolDto>(new RemoveMoneyPoolCommand(
            request.moneyPoolId,
        ));
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return response;
    }
}