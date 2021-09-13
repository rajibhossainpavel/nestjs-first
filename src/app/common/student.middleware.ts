import { Injectable, NestMiddleware, HttpException} from '@nestjs/common';
import {Request, Response} from 'express';
import { students } from '../../db';

@Injectable()
export class StudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const studentId=req.params.studentId;
    const studentExists=students.some(student=>{
      return student.id==studentId;
    });
    if(!studentExists){
        //throw new HttpException("Student Id does not exists.", 470);
    }
    next();
  /*   console.log(res.emit);
    res.writeHead(200, { 'content-type': 'application/json' })
    res.write(JSON.stringify({ test: "test"}))
    res.end() */
    }
}