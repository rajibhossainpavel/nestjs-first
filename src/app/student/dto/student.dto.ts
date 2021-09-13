import {IsString} from 'class-validator';

export class FindStudentResponseDTO{
    @IsString()
    id: string;
    @IsString()
    name:string;
    @IsString()
    teacher:string
}
export class StudentResponseDTO{
    @IsString()
    id: string;
    @IsString()
    name:string;
    @IsString()
    teacher:string
}

export class CreateStudentDTO{
    @IsString()
    name:string;
    @IsString()
    teacher:string
}

export class UpdateStudentDTO{
    @IsString()
    name:string;
    @IsString()
    teacher:string
}