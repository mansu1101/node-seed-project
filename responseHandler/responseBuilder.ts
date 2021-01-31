const baseResponse = require('./baseResponse'),
  errors = require('../errorHandler/errors').Errors(),
  util = require('util');

class ResponseBuilder {

  private static instance: ResponseBuilder;
  data: any;
  error: any;

  static getInstance(): ResponseBuilder {
    if (!ResponseBuilder.instance) {
      ResponseBuilder.instance = new ResponseBuilder();
    }
    return ResponseBuilder.instance;
  }

  public PartialSuccessResponse(err: any, data: any): any {
    // Inherit Base Response to get the common properties built into response
    // TODO: Use arguments to improvise on Base Response object when these will be implemented
    // console.log(typeof baseResponse)
    baseResponse.apply(this, arguments);
    this.data = data;
    this.error = err;
  }

  public ErrorResponse(err: any): any {
    // Inherit Base Response to get the common properties built into response
    // TODO: Use arguments to improvise on Base Response object when these will be implemented
    baseResponse.apply(this, arguments);
    this.error = err;
  }

  public SuccessResponse(data: any): any {
    // Inherit Base Response to get the common properties built into response
    // TODO: Use arguments to improvise on Base Response object when these will be implemented
    baseResponse.apply(this, arguments);
    this.data = data;
  }
}
// console.log("Kya hai : ", ResponseBuilder.getInstance().PartialSuccessResponse, " kyyyyyyyy", baseResponse);
/* util.inherits(ResponseBuilder.getInstance().PartialSuccessResponse, baseResponse);
util.inherits(ResponseBuilder.getInstance().ErrorResponse, baseResponse);
util.inherits(ResponseBuilder.getInstance().SuccessResponse, baseResponse); */

export default ResponseBuilder.getInstance();
