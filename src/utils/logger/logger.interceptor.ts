import { CallHandler, ConsoleLogger, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const [req,res] = context.getArgs()

    console.log("pasé por el interceptor")

    console.log("Accediendo al req desde interceptor",req.params)
    console.log("Accediendo al body desde interceptor",req.body)
    console.log(req._parsedUrl.pathname)
    console.log(req)

    return next.handle();
  }
}
