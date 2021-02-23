import * as inputData from "../../fixtures/nero_login.json";
import { settingsButton } from "../../page-objects/nero_generalPage";
import LoginPage from "../../page-objects/nero_loginPage";

describe("Avoid multy login via UI by saving token to Local Storage", () => {
  beforeEach("Login via api", () => {
    cy.loginWithToken(inputData.login, inputData.password);
  });

  it("User is starting session from General page", () => {
    cy.visit(inputData.url + "/general").wait(10000);
    cy.url().should("include", "general");
  });
  it("User is starting session from Settings page", () => {
    cy.visit(inputData.url + "/settings").wait(10000);
    cy.url().should("include", "settings");
  });
});
