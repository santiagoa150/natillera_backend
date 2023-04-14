import {ApiProperty} from '@nestjs/swagger';

export class SuccessfulResponse {
    @ApiProperty({type: Boolean}) public success = true;
}