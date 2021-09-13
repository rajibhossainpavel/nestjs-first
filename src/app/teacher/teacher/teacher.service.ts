import { Injectable } from '@nestjs/common';
import {teachers} from '../../../db';
import {v4 as uuid} from 'uuid';
import {FindTeacherResponseDTO} from '../dto/teacher.dto';


@Injectable()
export class TeacherService {
    private teachers=teachers;
    getTeachers():FindTeacherResponseDTO[]{
        return this.teachers;
    }
    getTeacherById(teacherId: string):FindTeacherResponseDTO{
        return this.teachers.find(teacher=>{
            return teacher.id==teacherId;
        });
    }
}
