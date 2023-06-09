import {Controller, Logger} from '@nestjs/common';
import {CommandBus, QueryBus} from '@nestjs/cqrs';

@Controller()
export abstract class SharedController {
    protected abstract readonly logger: Logger;

    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {
    }

    protected async dispatch<T>(command): Promise<T> {
        return this.commandBus.execute(command);
    }

    protected async query<T>(query): Promise<T> {
        return this.queryBus.execute(query);
    }
}