import {
    IsString,
    MinLength,
    IsBoolean
} from 'class-validator';

export class CreateTaskDTO {
    @IsString()
    @MinLength(1)
    title: string;

    @IsBoolean()
    status: boolean;
}