/*
https://www.npmjs.com/package/cypress-localstorage-commands
Cypress localStorage commands
Extends Cypress' cy commands with localStorage methods. Allows preserving localStorage between tests and disabling localStorage.
You want to preserve localStorage between Cypress tests. You want to disable localStorage to check error handling.
This solution allows you to use all browser localStorage methods through Cypress commands, and preserve it between tests. It also 
allows to simulate that localStorage is disabled in the browser.
*/

import * as inputData from "../../../fixtures/nero_login.json";
import {
  goToSettings,
  canvasNotifications,
  goToGeneral,
} from "../../../page-objects/nero_generalPage";
import LoginPage from "../../../page-objects/nero_loginPage";

describe("Using external package", () => {
  describe("Login via GUI and SAVE LOCAL STORAGE once", () => {
    it("[ПОКАЗАТЬ ПОИСК] is displayed on the General page", () => {
      cy.visit(inputData.url);
      LoginPage.ordinaryUserLogin(inputData.login, inputData.password);
      cy.url().should("include", "general");
      cy.get(goToSettings).click();
      cy.url().should("include", "settings");
      cy.saveLocalStorage();
    });
  });

  describe("Starting tests with restoring LOCAL STORAGE before each", () => {
    beforeEach("Restoring Local Storage data before every test", () => {
      cy.restoreLocalStorage();
    });

    it.only(`'Оповещение' is on the page Notifications`, () => {
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
});
