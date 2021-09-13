import {IsString} from 'class-validator';

export class FindTeacherResponseDTO{
    @IsString()
    id: string;
    @IsString()
    name:string
}