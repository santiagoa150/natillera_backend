import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {Request} from 'express';
import {HeadersConstants} from '../../domain/constants/HeadersConstants';
import {ErrorMessagesConstants} from '../../domain/constants/ErrorMessagesConstants';

@Injectable()
export class AppGuard implements CanActivate {

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest<Request>();
        const appKey = request.headers[HeadersConstants.APP_KEY] as string;
        if (appKey !== process.env.APP_KEY) {
            throw new UnauthorizedException(ErrorMessagesConstants.UNAUTHORIZED);
        }
        return true;
    }
}