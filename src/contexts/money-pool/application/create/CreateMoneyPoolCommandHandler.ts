import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {CreateMoneyPoolCommand} from './CreateMoneyPoolCommand';
import {MoneyPoolDto} from '../../domain/MoneyPoolDto';
import {Logger} from '@nestjs/common';
import {CreateMoneyPoolApp} from './CreateMoneyPoolApp';

@CommandHandler(CreateMoneyPoolCommand)
export class CreateMoneyPoolCommandHandler implements ICommandHandler<CreateMoneyPoolCommand, MoneyPoolDto> {

    private readonly logger: Logger = new Logger(CreateMoneyPoolCommandHandler.name);

    constructor(
        private readonly createMoneyPoolApp: CreateMoneyPoolApp,
    ) {
    }

    async execute(command: CreateMoneyPoolCommand): Promise<MoneyPoolDto> {
        this.logger.log(`[${this.execute.name}] INIT :: command: ${JSON.stringify(command)}`);
        const moneyPoolCreated = await this.createMoneyPoolApp.exec(
            command.name,
            command.year,
            command.startDate,
            command.finishDate,
            command.handlingFee,
        );
        const response = moneyPoolCreated.toPrimitives();
        this.logger.log(`[${this.execute.name}] FINISH ::`);
        return response;
    }
}