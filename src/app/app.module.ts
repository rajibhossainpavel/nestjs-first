import { Module } from '@nestjs/common';
//import { StudentController } from './student/student.controller';
//import { TeacherController } from './teacher/teacher.controller';
//import { TeacherStudentController } from './teacher/student.controller';
//import {StudentService} from './student/student/student.service';
//import {TeacherService} from './teacher/teacher/teacher.service';
import { TeacherModuleModule } from './teacher/teacher-module/teacher-module.module';
import { StudentModuleModule } from './student/student-module/student-module.module';

@Module({
  imports: [TeacherModuleModule, StudentModuleModule],
  //controllers: [StudentController, TeacherController, TeacherStudentController],
  //providers:[StudentService, TeacherService]
})
export class AppModule {}
