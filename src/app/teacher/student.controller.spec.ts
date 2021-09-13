import { Test, TestingModule } from '@nestjs/testing';
import { TeacherStudentController } from './student.controller';

describe('StudentController', () => {
  let controller: TeacherStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherStudentController],
    }).compile();

    controller = module.get<TeacherStudentController>(TeacherStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
