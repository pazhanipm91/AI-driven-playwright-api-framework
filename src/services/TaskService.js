const TaskClient = require('../clients/task/TaskClient');
const TaskValidator = require('../clients/task/TaskValidator');
const TestConfigData = require('../config/TestConfigData');

class TaskService {
  constructor(request) {
    this.client = new TaskClient(request);
    this.validator = new TaskValidator();
  }

  async initialize() {}
  async dispose() {}

  async createTask(overrides = {}) {
    const response = await this.client.createTask(overrides);
    await this.validator.validateCreateResponse(response);
    TestConfigData.resourceRefId = response.data.referenceId;
    return response;
  }

  async getTaskDetails() {
    const response = await this.client.getTaskDetails();
    await this.validator.validateDetailsResponse(response, TestConfigData.resourceRefId);
    return response;
  }
}

module.exports = TaskService;