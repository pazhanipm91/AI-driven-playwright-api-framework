const { expect } = require('@playwright/test');

class TaskValidator {
  async validateCreateResponse(response) {
    expect(response.status).toBe('SUCCESS');
    expect(response.data).toHaveProperty('referenceId');
    return response.data;
  }

  async validateDetailsResponse(response, expectedRefId) {
    expect(response.status).toBe('SUCCESS');
    expect(response.data.referenceId).toBe(expectedRefId);
    return response.data;
  }
}

module.exports = TaskValidator;