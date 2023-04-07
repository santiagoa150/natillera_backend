import {applyDecorators, UseGuards} from '@nestjs/common';
import {AppGuard} from './AppGuard';

export const AppAuth = () => {
    return applyDecorators(
        UseGuards(AppGuard),
    );
};