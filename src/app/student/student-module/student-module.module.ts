import { MiddlewareConsumer, Module , NestMiddleware, NestModule, RequestMethod} from '@nestjs/common';
import {StudentService} from '../student/student.service';
import {StudentController} from '../student.controller';
import {StudentMiddleware} from '../../common/student.middleware';

@Module({
    providers:[StudentService],
    controllers:[StudentController],
    exports:[StudentService]
})
export class StudentModuleModule implements NestModule{
    configure(consumer:  MiddlewareConsumer){
        consumer.apply(StudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.GET
        });
        consumer.apply(StudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.PUT
        });
    }
}
