import { Module } from '@nestjs/common';
import {TeacherService} from '../teacher/teacher.service';
import {TeacherController} from '../teacher.controller';
import {TeacherStudentController} from '../student.controller';
import { StudentModuleModule } from 'src/app/student/student-module/student-module.module';
@Module({
    providers:[TeacherService],
    controllers:[TeacherController, TeacherStudentController],
    imports:[StudentModuleModule],
    exports:[TeacherService]

})
export class TeacherModuleModule {}
