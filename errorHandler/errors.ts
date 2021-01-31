const commonErrors = {
  ERROR_DATABASE: {
    code: 'ERROR_DATABASE',
    message: 'Error interacting with database. Please contact System Administrator.'
  },
  ERROR_EXCEPTION: {
    code: 'ERROR_EXCEPTION',
    message: 'Unknown Error occured. Please try again or contact System Administrator.'
  },
  // Invalid Request: Requests which fail business validation
  ERROR_INVALID_REQUEST: {
    code: 'ERROR_INVALID_REQUEST',
    message: 'Request is invalid. Please check info field for more details.'
  },
  ERROR_MAXIMUM_COUNT_EXCEEDED: {
    code: 'CARTOS_ERROR_MAXIMUM_COUNT_EXCEEDED',
    message: 'Maximum templates for user exceeded, please use or edit existing templates.'
  },
  ERROR_MISSING_CONFIGURATION: {
    code: 'ERROR_MISSING_CONFIGURATION',
    message: 'Some configuration in the service is missing. Please contact System Administrator.'
  },
  ERROR_OTHER: {
    code: 'ERROR_OTHER',
    message: 'Unknown Error occured. Please try again or contact System Administrator.'
  },
  ERROR_PARTIAL_EXECUTION: {
    code: 'ERROR_PARTIAL_EXECUTION',
    message: 'Some records in the request could not be processed.'
  },
  // Invalid Request: Requests which fail unique index (unique-key) constraint
  ERROR_RECORD_ALREADY_EXISTS: {
    code: 'ERROR_RECORD_ALREADY_EXISTS',
    message: 'Record Already Exists.'
  },
  ERROR_UNAUTHORIZED: {
    code: 'ERROR_UNAUTHORIZED',
    message: 'Unauthorized to perform this action.'
  },
  ERROR_UNAUTHORIZED_DATABASE_ACCESS: {
    code: 'ERROR_UNAUTHORIZED_DATABASE_ACCESS',
    message: 'Error in connecting to database. Please contact System Administrator.'
  },
  MAXIMUM_SIZE_EXCEEDS: {
    code: 'MAXIMUM_SIZE_EXCEEDS',
    message: 'Document exceeds maximum allowed bson size of 16777216 bytes'
  },
  ERROR_SESSION_EXPIRED: {
    code: 'ERROR_SESSION_EXPIRED',
    message: 'Session expired. Please login again.'
  },
  EXT_SERVICE_UNAUTHORIZED: {
    code: 'EXT_SERVICE_UNAUTHORIZED',
    message: 'Unauthorized to perform this action.'
  },
  EXT_SERVICE_ERROR: {
    code: 'EXT_SERVICE_ERROR',
    message: 'Connection refused. Please try again or contact System Administrator.'
  },
  SENECA_ERROR: {
    code: 'SENECA_ERROR',
    message: 'Seneca error, request failed'
  },
  INFECTED_FILE_ERROR: {
    code: 'INFECTED_FILE_ERROR',
    message: 'The multiplying villanies of nature do swarm upon us.'
  },
  ERROR_NO_RECORD: {
    code: 'ERROR_NO_RECORD',
    message: 'No matching records.'
  },

  ERROR_INVALID_SESSION: {
    code: 'ERROR_INVALID_SESSION',
    message: 'Session does not exists.'
  },
};

module.exports.Errors = function Errors(): any {
  return commonErrors;
};
