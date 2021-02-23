import * as inputData from "../../fixtures/nero_login.json";

describe("Avoid multy login via UI by saving token to Local Storage", () => {
  beforeEach("Login via api", () => {
    cy.loginWithToken(inputData.login, inputData.password);
  });

  it("User is starting session from General page", () => {
    cy.visit(inputData.url + "/general");
    cy.url().should("include", "general");
  });

  it("User is starting session from Settings page", () => {
    cy.visit(inputData.url + "/settings");
    cy.url().should("include", "settings");
  });
});
