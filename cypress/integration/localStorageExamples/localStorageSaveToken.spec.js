import * as inputData from "../fixtures/nero_login.json";
import { settingsButton } from "../page-objects/nero_generalPage";
import LoginPage from "../page-objects/nero_loginPage";

describe("User can start session from desired page onle after login", () => {
  it("User logs in via UI and goes to system settings", () => {
    cy.visit(inputData.url);
    LoginPage.ordinaryUserLogin(inputData.login, inputData.password);
    cy.url().should("include", "general");
    cy.get(settingsButton).click();
    cy.url().should("include", "settings");
  });

  // will fail
  it("User is trying to start session from Settings page", () => {
    cy.visit(inputData.url + "/settings");
    cy.url().should("include", "settings");
  });
});

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
