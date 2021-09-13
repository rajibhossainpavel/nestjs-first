import { CallHandler, ExecutionContext, Injectable, NestInterceptor, BadGatewayException } from '@nestjs/common';
import { Observable, of, throwError  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class StudentInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isCached = false;
    if (isCached) {
      return of([]);// if this is returned, the handle() function will never be called.
    }
    return next.handle().pipe(
      map(value => value === null ? '' : value),
      map(data => ({ data })),
      //catchError(err => throwError(new BadGatewayException()))//check the doc to get TimeoutError.
    );
  }
}
