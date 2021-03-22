import * as inputData from "../../../fixtures/nero_login.json";
import {
  goToSettings,
  goToGeneral,
  showWhatisFound,
  goToNotifications,
  canvasNotifications,
} from "../../../page-objects/nero_generalPage";
import LoginPage from "../../../page-objects/nero_loginPage";

describe("Ordinary flow via GUI", () => {
  beforeEach(() => {
    cy.visit(inputData.url);
    LoginPage.ordinaryUserLogin(inputData.login, inputData.password);
  });

  it("[ПОКАЗАТЬ ПОИСК] is displayed on the General page", () => {
    cy.url().should("include", "general");
    cy.get(showWhatisFound).should("be.visible");
  });

  it(`'Оповещение' is on the page Notifications`, () => {
    cy.get(goToNotifications).click();
    cy.url().should("include", "/notifications");
    cy.get(canvasNotifications).should("contain", "Оповещения");
  });

  it(`Notifications. User goes back to General page`, () => {
    cy.get(goToNotifications).click();
    cy.url().should("include", "/notifications");
    cy.contains(goToGeneral).click();
    cy.url().should("include", "/general");
  });

  it(`'Настройки' is on the page Settings`, () => {
    cy.get(goToSettings).click();
    cy.url().should("include", "/settings");
    cy.get(canvasNotifications).should("contain", "Настройки");
  });

  it("Settings. User goes back to General page", () => {
    cy.get(goToSettings).click();
    cy.url().should("include", "/settings");
    cy.contains(goToGeneral).click();
    cy.url().should("include", "/general");
  });
});
