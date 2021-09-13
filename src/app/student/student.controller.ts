import { Controller, Get, Param, Post, Put, Body, ParseUUIDPipe, DefaultValuePipe, ValidationPipe, UseInterceptors} from '@nestjs/common';
import {FindStudentResponseDTO, StudentResponseDTO, CreateStudentDTO, UpdateStudentDTO} from './dto/student.dto';
import {StudentService} from './student/student.service';
import {StudentInterceptor} from '../common/student.interceptor';

@UseInterceptors(new StudentInterceptor())
@Controller('students')
export class StudentController {
    constructor(private readonly studentService:StudentService){}
    @Get()
    getStudents(): FindStudentResponseDTO[]{
        return this.studentService.getStudents();
    }
    
    @Get('/:studentId')
    getStudentById(
        @Param('studentId', new DefaultValuePipe(false), new ParseUUIDPipe()) studentId: string
    ): FindStudentResponseDTO {
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(
        @Body(new ValidationPipe()) body:CreateStudentDTO
    ):StudentResponseDTO{
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudentById(
        @Param('studentId', new DefaultValuePipe(false), new ParseUUIDPipe()) studentId:string,
        @Body(new ValidationPipe()) body:UpdateStudentDTO
    ):StudentResponseDTO{
        return this.studentService.updateStudentById(studentId, body);
    }

}
