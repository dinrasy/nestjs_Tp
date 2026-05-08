import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql'; 
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    
    // Check if the request is HTTP (REST) or GraphQL
    const type = context.getType<'http' | 'graphql'>();

    if (type === 'graphql') {
      // ✅ Handle GraphQL Logging
      const gqlContext = GqlExecutionContext.create(context);
      const info = gqlContext.getInfo();
      
      return next.handle().pipe(
        tap(() => {
          const ms = Date.now() - start;
          console.log(`[GraphQL] ${info.parentType.name}.${info.fieldName} - ${ms}ms`);
        }),
      );
    } else {
      const req = context.switchToHttp().getRequest();
      const method = req?.method;
      const url = req?.url;

      return next.handle().pipe(
        tap(() => {
          const ms = Date.now() - start;
          console.log(`[HTTP] ${method} ${url} - ${ms}ms`);
        }),
      );
    }
  }
}