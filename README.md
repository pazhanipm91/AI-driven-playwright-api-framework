# AI-driven-playwright-api-framework
"Production-grade API Test Automation Framework built using Playwright, Node.js, and a Service-Object-Model(SOM) Architecture - Designed using AI Assisted Agentic-Workflows and Human-In-The-Loop(HITL) engineering practices.

# 🚀 Enterprise Playwright API Automation Framework

A production-grade, scalable API Test Automation framework built from scratch using **Playwright Test** and **Node.js (JavaScript/TypeScript)**. Designed following the **Service Object Model (SOM)** architecture and **Custom Fixtures Pattern**, optimized for continuous integration and enterprise-level regression testing.

---

## 🏗️ Architecture & Design Patterns

This framework strictly enforces **Separation of Concerns** across multiple decoupled layers:
1. **Test Specification Layer (`tests/`)**: Purely declarative test suites containing test case definitions and assertions—completely free of raw HTTP calls or hardcoded endpoints.
2. **Fixture Layer (`fixtures/`)**: Utilizes Playwright's custom test extensions (`base.test.extend`) for clean dependency injection and automated setup/teardown cycles.
3. **Service Layer (`src/services/`)**: Encapsulates business logic workflows, chaining client actions and response validators together.
4. **Client Layer (`src/clients/`)**: Feature-modular architecture housing:
   * **Endpoints**: Centralized API route repositories with dynamic parameterization.
   * **Payloads**: Factory design pattern utilizing ES6 object spreading (`...overrides`) for flexible test data variations.
   * **Validator**: Reusable assertion modules for response status codes and schema validation.
   * **Client**: Low-level protocol wrappers utilizing Playwright’s high-performance `APIRequestContext`.
5. **Runtime Data State (`src/config/`)**: Manages dynamic inter-test data dependencies (e.g., passing generated resource IDs across sequential execution chains).

---

## 🛠️ Tech Stack
* **Test Runner:** Playwright Test (`@playwright/test`)
* **Language:** JavaScript (Node.js)
* **Design Patterns:** Service Object Model, Factory Pattern, Dependency Injection
* **CI/CD & Reporting:** HTML Reports, List Reporters, CI Pipeline Ready

---

## 📂 Quick-Start Setup

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/pazhanipm91/playwright-api-portfolio.git](https://github.com/pazhanipm91/playwright-api-portfolio.git)
   cd playwright-api-portfolio
