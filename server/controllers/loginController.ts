import * as express from 'express';
import 'reflect-metadata';
import { ApiOperationPost, ApiPath } from 'swagger-express-ts';

import responseHandler from '../../responseHandler/responseHandler';
import ldapAuthService from '../services/auth/ldapAuthService';

@ApiPath({
  description: 'Login Controller',
  name: 'Login Controller',
  path: '/api/login'
})
class LoginController {

  public static getInstance(): LoginController {
    if (!LoginController.instance) {
      LoginController.instance = new LoginController();
    }
    return LoginController.instance;
  }
  private static instance: LoginController;
  private router: express.Router;

  constructor() {
    this.router = express.Router();
    this.router.post('/', this.login);
  }

  public getRouter(): express.Router {
    return this.router;
  }

  @ApiOperationPost({
    description: 'Post user object',
    parameters: {
      body: {
        description: 'Login user',
        model: 'User',
        required: true,
      },
    },
    responses: {
      200: {
        model: 'User',
      },
      400: { description: 'Parameters fail' },
    },
    /* security: { - use if route is protected
      apiKeyHeader: [],
    }, */
    summary: 'Post for login user',
  })
  private async login(
    request: express.Request,
    response: express.Response
  ): Promise<void> {
    try {
      const result = await ldapAuthService.ldapAuth(request, response);
      // response.send(result);
      // TODO: Uncomment the code once response handler issue is resolved
      responseHandler.send(response, null, result, request);
    } catch (err) {
      response.send(err);
      // TODO: Uncomment the code once response handler issue is resolved
      // responseHandler.send(response, err, null, request);
    }
  }
}

export default LoginController.getInstance();
