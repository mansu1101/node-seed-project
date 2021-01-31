/*jslint node: true, nomen: true, plusplus: true*/
'use strict';
const errors = require('./errors').Errors();

class ApplicationErrors {
  private errorCode: string;
  private message: string;
  private info: string[] = new Array();

  public DatabaseError(err: any, options: any): any{
    if (!options) {
      options = {};
    }
    switch (err.code) {
    case (11000):
      this.errorCode = errors.ERROR_RECORD_ALREADY_EXISTS.code;
      this.message = errors.ERROR_RECORD_ALREADY_EXISTS.message;
      if (options.hasOwnProperty('fieldName')) {
        this.info = ['A record with the same ' + options.fieldName +
          ' already exits. Please try again with another ' + options.fieldName];
      }
      break;
    default :
      this.errorCode = errors.ERROR_DATABASE.code;
      this.message = errors.ERROR_DATABASE.message;
      break;
    }
  }

  public InvalidRequest(options: any): any {
    if (!options) {
      options = {};
    }
    if (options.message === errors.MAXIMUM_SIZE_EXCEEDS.message) {
      this.errorCode = errors.MAXIMUM_SIZE_EXCEEDS.code;
      this.message = errors.MAXIMUM_SIZE_EXCEEDS.message;
    } else {
      this.errorCode = errors.ERROR_INVALID_REQUEST.code;
      if (options.hasOwnProperty('message')) {
        this.message = options.message;
      } else {
        this.message = errors.ERROR_INVALID_REQUEST.message;
      }
      if (options.hasOwnProperty('info')) {
        this.info = options.info;
      }
    }
  }

  public MissingConfigurationError(options: any): any {
    if (!options) {
      options = {};
    }
    this.errorCode = errors.ERROR_MISSING_CONFIGURATION.code;
    if (options.hasOwnProperty('fieldName')) {
      this.message = 'Missing configuration : ' + options.fieldName;
      this.info = [options.fieldName + ' is not set up for the application. Please contact the system Administrator'];
    } else {
      this.message = errors.ERROR_MISSING_CONFIGURATION.message;
    }
  }

  /**
   * user is allowed only limited no. of templates
   * @param options object with validation info
   */
  public MaximumCountExceededError(options: any): any {
    if (!options) {
      options = {};
    }
    this.errorCode = errors.ERROR_MAXIMUM_COUNT_EXCEEDED.code;
    if (options.hasOwnProperty('validationInfo')) {
      this.message = 'MaximumCountExceededError : ' + options.validationInfo;
      this.info = [options.validationInfo + ' please use or edit existing templates.'];
    } else {
      this.message = errors.ERROR_MAXIMUM_COUNT_EXCEEDED.message;
    }
  }

  public NoRecord(options: any): any {
    if (!options) {
      options = {};
    }
    this.errorCode = errors.ERROR_NO_RECORD.code;
    if (options.hasOwnProperty('message')) {
      this.message = options.message;
    } else {
      // TODO:customized the message for get, post, put and delete;
      this.message = errors.ERROR_NO_RECORD.message;
    }
  }

  public PartialExecution(options: any): any {
    if (!options) {
      options = {};
    }
    this.errorCode = errors.ERROR_PARTIAL_EXECUTION.code;
    if (options.hasOwnProperty('message')) {
      this.message = options.message;
    } else {
      // TODO:customized the message for get, post, put and delete;
      this.message = errors.ERROR_PARTIAL_EXECUTION.message;
    }

    if (options.hasOwnProperty('info')) {
      this.info = Array.isArray(options.info) ? options.info : [options.info];
    } else {
      this.info = [];
    }

    if (options.hasOwnProperty('input') && options.hasOwnProperty('output')) {
      this.info.push(options.input.length - options.output.length + ' out of ' + options.input.length + ' records not found.');
    }

    if (options.hasOwnProperty('fieldName')) {
      this.info.push('No record matching the given ' + options.fieldName + ' found in the database.');
    }
  }

  public Exception(options: any): any {
    // TODO: Use options to construct error object effectively when need arises
    this.errorCode = errors.ERROR_EXCEPTION.code;
    this.message = errors.ERROR_EXCEPTION.message;
  }

  public OtherError(options: any): any {
    if (!options) {
      options = {};
    }
    this.errorCode = errors.ERROR_OTHER.code;
    if (options.hasOwnProperty('message')) {
      this.message = options.message;
    } else {
      // TODO:customized the message for get, post, put and delete;
      this.message = errors.ERROR_OTHER.message;
    }
  }

  public Unauthorized(options: any): any {
    // TODO: Use options to construct error object effectively
    // For Invalid Session
    // For Session Expired
    // For Roles and permisssions issue
    if (!options) {
      options = {};
    }
    this.errorCode = errors.ERROR_UNAUTHORIZED.code;
    this.message = errors.ERROR_UNAUTHORIZED.message;

    if (options.hasOwnProperty('message')) {
      this.message = options.message;
    }
  }

  public UnauthorizedDataBaseAccess(options: any): any {
    if (!options) {
      options = {};
    }
    this.errorCode = errors.ERROR_UNAUTHORIZED_DATABASE_ACCESS.code;
    this.message = options.hasOwnProperty('message') ? options.message : errors.ERROR_UNAUTHORIZED_DATABASE_ACCESS.message;
  }
}

module.exports = {
  // Constructors for different types of Error Objects
  DatabaseError: new ApplicationErrors().DatabaseError,
  Exception: new ApplicationErrors().Exception,
  InvalidRequest: new ApplicationErrors().InvalidRequest,
  MaximumCountExceededError: new ApplicationErrors().MaximumCountExceededError,
  MissingConfigurationError: new ApplicationErrors().MissingConfigurationError,
  NoRecord: new ApplicationErrors().NoRecord,
  OtherError: new ApplicationErrors().OtherError,
  PartialExecution: new ApplicationErrors().PartialExecution,
  Unauthorized: new ApplicationErrors().Unauthorized,
  UnauthorizedDataBaseAccess: new ApplicationErrors().UnauthorizedDataBaseAccess
};
