import {ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger,} from '@nestjs/common';
import {Request, Response} from 'express';
import {ErrorStatusCodesConstants} from '../../../contexts/shared/domain/constants/ErrorStatusCodesConstants';
import {ExceptionResponse} from '../../../contexts/shared/domain/ExceptionResponse';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

    private readonly logger: Logger = new Logger(HttpExceptionFilter.name);

    catch(exception: HttpException, host: ArgumentsHost): void {
        const data = {
            message: this.resolveMessage(exception),
            code: ErrorStatusCodesConstants.INTERNAL_SERVER_ERROR,
            status: HttpStatus.INTERNAL_SERVER_ERROR
        };
        if (exception instanceof HttpException) {
            const excResponse = exception.getResponse() as ExceptionResponse;
            data.message = excResponse.message;
            data.code = excResponse.statusCode;
            data.status = exception.getStatus();
        }
        this.logger.error(`[${this.catch.name}] ERROR :: ${data.message}`);
        this.setResponse(host, data.status, data.code, data.message);
    }

    private setResponse(host: ArgumentsHost, status: HttpStatus, code: ErrorStatusCodesConstants, message: string): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        response.status(status).json({
            success: false,
            statusCode: code,
            message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }

    private resolveMessage(exception): string {
        if (typeof exception === 'object') {
            if (exception.response) {
                if (Array.isArray(exception.response.message)) {
                    return exception.response.message[0];
                }
                return exception.response.message;
            }
            return exception.message;
        }
        if (typeof exception === 'string') {
            return exception;
        }
    }
}
