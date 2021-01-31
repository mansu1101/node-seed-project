import responseBuilder from './responseBuilder';
const errors = require('../errorHandler/errors').Errors();
const hTTPStatus = require('http-status-codes');
/*const logger = require('../config/logger');
const log = logger.LOG;*/

class ResponseHandler {

  public static getInstance(): ResponseHandler {
    if (!ResponseHandler.instance) {
      ResponseHandler.instance = new ResponseHandler();
    }
    return ResponseHandler.instance;
  }

  private static instance: ResponseHandler;

  public getStatusByErrorCode(code: number): any {
    switch (code) {
    case errors.ERROR_NO_RECORD.code: // return 204
      return hTTPStatus.NO_CONTENT;
      // return 401 (Unauthorized) is the session is not valid or expired
    case errors.ERROR_INVALID_SESSION.code:
      return hTTPStatus.UNAUTHORIZED;
    case errors.ERROR_SESSION_EXPIRED.code:
      return hTTPStatus.UNAUTHORIZED;
    case errors.ERROR_UNAUTHORIZED.code:
      return hTTPStatus.UNAUTHORIZED;
    case errors.ERROR_UNAUTHORIZED_DATABASE_ACCESS.code:
      return hTTPStatus.UNAUTHORIZED;
      // return 422 for invalid requests
      // Requests which fail unique index (unique-key) constraint
    case errors.ERROR_RECORD_ALREADY_EXISTS.code:
      return hTTPStatus.UNPROCESSABLE_ENTITY;
      // Requests which fail business validation
    case errors.ERROR_INVALID_REQUEST.code:
      return hTTPStatus.UNPROCESSABLE_ENTITY;
      // Return 500 for all other errors
    default:
      return hTTPStatus.INTERNAL_SERVER_ERROR;
    }
  }

  public send(res: any, err: any, data: any, req: any): any {
    let response = {};
    // Partial success is when both err and data is present
    if (err && data) {
      response = responseBuilder.PartialSuccessResponse(err, data);
      res.status(hTTPStatus.PARTIAL_CONTENT).json(response);
    } else if (err) { // Complete Failure
      // Get http status for the response based on the error object
      const httpStatus = this.getStatusByErrorCode(err.errorCode);
      response = responseBuilder.ErrorResponse(err);
      res.status(httpStatus).json(response);
    } else if (!err && !data) {  // No error and No data
      res.status(hTTPStatus.NO_CONTENT).json();
    } else { // Success
      try {
        response = responseBuilder.SuccessResponse(data);
        res.status(hTTPStatus.OK).json(response);
      } catch (ex) {
        // log.error('Error while generating the API response - ', ex);
        res.status(hTTPStatus.INTERNAL_SERVER_ERROR).json();
      }
    }
  }
}

export default ResponseHandler.getInstance();
