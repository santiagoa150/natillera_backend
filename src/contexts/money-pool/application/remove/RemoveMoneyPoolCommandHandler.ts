import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {RemoveMoneyPoolCommand} from './RemoveMoneyPoolCommand';
import {Logger} from '@nestjs/common';
import {MoneyPoolDto} from '../../domain/MoneyPoolDto';
import {RemoveMoneyPoolApp} from './RemoveMoneyPoolApp';
import {MoneyPoolId} from '../../domain/MoneyPoolId';

@CommandHandler(RemoveMoneyPoolCommand)
export class RemoveMoneyPoolCommandHandler implements ICommandHandler<RemoveMoneyPoolCommand, MoneyPoolDto> {

    private readonly logger: Logger = new Logger(RemoveMoneyPoolCommandHandler.name);

    constructor(
        private readonly removeMoneyPoolApp: RemoveMoneyPoolApp,
    ) {
    }

    async execute(command: RemoveMoneyPoolCommand): Promise<MoneyPoolDto> {
        this.logger.log(`[${this.execute.name}] INIT :: command: ${JSON.stringify(command)}`);
        const moneyPoolDeleted = await this.removeMoneyPoolApp.exec(
            new MoneyPoolId(command.moneyPoolId),
        );
        const response: MoneyPoolDto = moneyPoolDeleted.toPrimitives();
        this.logger.log(`[${this.execute.name}] FINISH ::`);
        return response;
    }
}