import * as inputData from "../../../fixtures/nero_login.json";
import {
  showWhatisFound,
  canvasNotifications,
  goToGeneral,
} from "../../../page-objects/nero_generalPage";

describe("Login via API", () => {
  beforeEach("Login via api", () => {
    cy.loginWithToken(inputData.login, inputData.password);
  });

  it("[ПОКАЗАТЬ ПОИСК] is displaid on the General page", () => {
    cy.visit(inputData.url + "/general");
    cy.url().should("include", "general");
    cy.get(showWhatisFound).should("be.visible");
  });

  it(`'Оповещение' is on the page Notifications`, () => {
    cy.visit(inputData.url + "/notifications");
    cy.url().should("include", "/notifications");
    cy.get(canvasNotifications).should("contain", "Оповещения");
  });

  it(`Notifications. User goes back to General page`, () => {
    cy.visit(inputData.url + "/notifications");
    cy.url().should("include", "/notifications");
    cy.contains(goToGeneral).click();
    cy.url().should("include", "/general");
  });

  it(`'Настройки' is on the page Settings`, () => {
    cy.visit(inputData.url + "/settings");
    cy.url().should("include", "/settings");
    cy.get(canvasNotifications).should("contain", "Настройки");
  });

  it("Settings. User goes back to General page", () => {
    cy.visit(inputData.url + "/settings");
    cy.url().should("include", "/settings");
    cy.contains(goToGeneral).click();
    cy.url().should("include", "/general");
  });
});
