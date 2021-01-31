import * as express from 'express';
import 'reflect-metadata';
import { ApiOperationGet, ApiOperationPost, ApiPath, SwaggerDefinitionConstant, } from 'swagger-express-ts';

import responseHandler from '../../responseHandler/responseHandler';
import ldapAuthService from '../services/auth/ldapAuthService';


@ApiPath({
    description: 'Login Controller',
    name: 'Login Controller',
    path: '/api/login',
    // security: { apiKeyHeader: [] }, - use if route is protected
})
class LoginController {

    private router: express.Router;
    private static instance: LoginController;

    static getInstance(): LoginController {
        if (!LoginController.instance) {
            LoginController.instance = new LoginController();
        }
        return LoginController.instance;
    }

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
            let result = await ldapAuthService.ldapAuth(request, response);
            response.send(result)
            //TODO: Uncomment the code once response handler issue is resolved
            //responseHandler.send(response, null, result, request);
        } catch (err) {
            response.send(err)
            //TODO: Uncomment the code once response handler issue is resolved
            //responseHandler.send(response, err, null, request);
        }
    }
}

export default LoginController.getInstance();