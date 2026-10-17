const TestConfigData = require('../../config/TestConfigData');

class TaskPayloads {
  static getCreatePayload(overrides = {}) {
    return {
      agentId: TestConfigData.agent_id,
      title: 'Automated Task Creation API',
      description: 'AI-driven test automation data payload',
      type: 'TASK',
      ...overrides,
    };
  }

  static getUpdatePayload(taskId, overrides = {}) {
    return {
      type: 'TASK',
      referenceId: taskId,
      userInputs: {
        title: 'Updated Task Configuration',
        status: 'IN_PROGRESS',
      },
      ...overrides,
    };
  }
}

module.exports = TaskPayloads;