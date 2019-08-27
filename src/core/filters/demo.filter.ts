import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class DemoFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const status = exception.getStatus();
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();

    res
      .status(status)
      .json({
        statusCode: status,
        path: req.url
      })
  }
}
