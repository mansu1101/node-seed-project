class Interceptor {
  public static getInstance(): Interceptor {
    if (!Interceptor.instance) {
      Interceptor.instance = new Interceptor();
    }
    return Interceptor.instance;
  }

  private static instance: Interceptor;

  public interceptor(req: any, res: any, next: any, data: any): any {
    // Jwt's secretCallback function sets the new token in the req.header
    // Copy the new token from req.header to response header before sending response
    res.set('Authorization', req.headers['x-token']);
  }
}

export default Interceptor.getInstance();
