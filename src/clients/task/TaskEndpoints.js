const TestConfigData = require('../../config/TestConfigData');

const TaskEndpoints = {
  CREATE: '/api/v1/task/create',
  GET_DETAILS: () => `/api/v1/task/${TestConfigData.resourceRefId}`,
  UPDATE: () => `/api/v1/task/${TestConfigData.resourceRefId}`,
  DELETE: () => `/api/v1/task/${TestConfigData.resourceRefId}`,
};

module.exports = TaskEndpoints;