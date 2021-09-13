import { Controller, Get, Param, ParseUUIDPipe, DefaultValuePipe} from '@nestjs/common';
import {FindTeacherResponseDTO} from './dto/teacher.dto';
import {TeacherService} from './teacher/teacher.service';
@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService:TeacherService){}
    @Get()
    getTeachers():FindTeacherResponseDTO[]{
        return this.teacherService.getTeachers();
    }
    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId', new DefaultValuePipe(false), new ParseUUIDPipe()) teacherId:string
    ):FindTeacherResponseDTO{
        return this.teacherService.getTeacherById(teacherId);
    }
}
