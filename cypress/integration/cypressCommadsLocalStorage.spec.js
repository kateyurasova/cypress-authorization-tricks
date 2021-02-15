import * as inputData from "../fixtures/nero_login.json";
import { settingsButton } from "../page-objects/nero_generalPage";
import LoginPage from "../page-objects/nero_loginPage";

describe("User can start session from desired page only after login", () => {
  it("User logs in via UI and goes to system settings", () => {
    cy.visit(inputData.url);
    LoginPage.ordinaryUserLogin(inputData.login, inputData.password);
    cy.url().should("include", "general");
    cy.get(settingsButton).click();
    cy.url().should("include", "settings");
    cy.saveLocalStorage();
  });

  // will fail
  it("User is trying to start session from Settings page", () => {
    cy.visit(inputData.url + "/settings");
    cy.url().should("include", "settings");
  });
});

// will fail
describe("Avoid multy login via UI by saving token to Local Storage", () => {
  beforeEach("Restoring Local Storage data before every test", () => {
    cy.restoreLocalStorage();
  });

  it("User is starting session from Settings page", () => {
    cy.visit(inputData.url + "/settings");
    cy.url().should("include", "settings");
  });
  it("User is starting session from Notifications page", () => {
    // cy.loginWithToken(inputData.login, inputData.password);
    cy.visit(inputData.url + "/notifications");
    cy.url().should("include", "notifications");
  });
});
