import { Request, Response, Router } from 'express';
import responseHandler from '../../responseHandler/responseHandler';
class HealthController {
  public static routes(): Router {
    return Router().get('/', (req: Request, res: Response) => {
      responseHandler.send(res, null, 'Healthy', req);
    });
  }
}

export default HealthController;
