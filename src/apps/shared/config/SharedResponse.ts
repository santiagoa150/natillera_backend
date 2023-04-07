import {ApiProperty} from '@nestjs/swagger';

export class SharedResponse {
    @ApiProperty({type: Boolean}) public success = true;
}