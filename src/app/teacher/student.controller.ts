import { Controller, Get, Param, Put, ParseUUIDPipe, DefaultValuePipe} from '@nestjs/common';
import {FindStudentResponseDTO, UpdateStudentDTO} from '../student/dto/student.dto';
import {StudentService} from '../student/student/student.service';

@Controller('/teachers/:teacherId/students')
export class TeacherStudentController {
    constructor(private readonly studentService: StudentService){}
    @Get()
    getStudents(
        @Param('teacherId', new DefaultValuePipe(false), new ParseUUIDPipe()) teacherId:string
    ): FindStudentResponseDTO[]{
        return this.studentService.getStudentsThroughTeacherId(teacherId);
    }

    @Put('/:studentId')
    updateTeacherStudent(
        @Param('teacherId') teacherId:string,
        @Param('studentId', new DefaultValuePipe(false), new ParseUUIDPipe()) studentId:string
    ): UpdateStudentDTO{
        return this.studentService.updateTeacherStudent(teacherId, studentId);
    }
}
