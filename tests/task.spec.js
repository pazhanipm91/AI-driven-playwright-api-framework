const { test, expect } = require('../fixtures/task.fixture');
const TestConfigData = require('../src/config/TestConfigData');

test.describe('Task Automation API Suite', () => {
  test('TSK_001: Create Task via API', async ({ taskService }) => {
    const response = await taskService.createTask();
    expect(response.status).toBe('SUCCESS');
    console.log('Generated referenceId:', TestConfigData.resourceRefId);
  });

  test('TSK_002: Fetch and Validate Task Details', async ({ taskService }) => {
    const response = await taskService.getTaskDetails();
    expect(response.status).toBe('SUCCESS');
    expect(response.data.referenceId).toBe(TestConfigData.resourceRefId);
  });
});