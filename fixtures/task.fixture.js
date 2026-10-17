const base = require('@playwright/test');
const TaskService = require('../src/services/TaskService');

exports.test = base.test.extend({
  taskService: async ({ request }, use) => {
    const service = new TaskService(request);
    await service.initialize();
    await use(service);
    await service.dispose();
  },
});

exports.expect = base.expect;