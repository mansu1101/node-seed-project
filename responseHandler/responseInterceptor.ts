let interceptor = require('res-interceptor');

class Interceptor {

  private static instance: Interceptor;

  static getInstance(): Interceptor {
    if (!Interceptor.instance) {
      Interceptor.instance = new Interceptor();
    }
    return Interceptor.instance;
  }

  public interceptor(req: any, res: any, next: any, data: any): any {
    // Jwt's secretCallback function sets the new token in the req.header
    // Copy the new token from req.header to response header before sending response
    res.set('Authorization', req.headers['x-token']);
  }
}

export default Interceptor.getInstance();
