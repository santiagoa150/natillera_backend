import {ApiProperty} from '@nestjs/swagger';

export class SharedResponsesConstants {
    @ApiProperty({type: Boolean}) public success = true;
}