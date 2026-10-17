const TaskEndpoints = require('./TaskEndpoints');
const TaskPayloads = require('./TaskPayloads');

class TaskClient {
  constructor(request) {
    this.request = request;
  }

  async createTask(overrides = {}) {
    const payload = TaskPayloads.getCreatePayload(overrides);
    const response = await this.request.post(TaskEndpoints.CREATE, { data: payload });
    return await response.json();
  }

  async getTaskDetails() {
    const response = await this.request.get(TaskEndpoints.GET_DETAILS());
    return await response.json();
  }
}

module.exports = TaskClient;