import { Injectable } from '@nestjs/common';
import {students} from '../../../db';
import { CreateStudentDTO, UpdateStudentDTO, StudentResponseDTO, FindStudentResponseDTO } from '../dto/student.dto';
import {v4 as uuid} from 'uuid';

@Injectable()
export class StudentService {
    private students=students;
    getStudents():FindStudentResponseDTO[]{
        return this.students;
    }

    getStudentById(studentId:string):FindStudentResponseDTO{
        return this.students.find(student=>{
            return student.id==studentId
        })
    }

    createStudent(payload:CreateStudentDTO):StudentResponseDTO{
        let newStudent={
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudentById(studentId:string, payload: UpdateStudentDTO): StudentResponseDTO{
        let updatedStudent:StudentResponseDTO;
        const updateStudentList=this.students.map(student=>{
            if(student.id==studentId){
                return updatedStudent={
                    id: studentId,
                    ...payload
                }
            }else return student;
        });
        this.students=updateStudentList;
        return updatedStudent;
    }

    getStudentsThroughTeacherId(teacherId: string):FindStudentResponseDTO[]{
        return this.students.filter(student=>{
            return student.teacher==teacherId
        });
    }

    updateTeacherStudent(teacherId: string, studentId: string): StudentResponseDTO{
        let updatedStudent:StudentResponseDTO;
        const updateStudentList=this.students.map(student=>{
            if(student.id==studentId){
                return updatedStudent={
                    ...student,
                    teacher: teacherId
                }
            }else return student;
        });
        this.students=updateStudentList;
        return updatedStudent;
    }

}
