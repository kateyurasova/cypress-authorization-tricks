import * as loginData from '../fixtures/login';
import VK_LoginPage from "../page-objects/VK_LoginPage";

context('Fiatures', () => {

  beforeEach(() => {
    //Cypress.Cookies.preserveOnce('XHR_STATS_TRANSPORT_META_web', 'XHR_STATS_TRANSPORT_DATA_LOCK_web')
    cy.preserveCookies();
  })
  it('Test 1 for VK', () => {
    cy.log('WHEN User logs in the VK profile');
    VK_LoginPage.open();
    VK_LoginPage.login(loginData.email, loginData.password);
    cy.wait(10000);

  })

  it('Test 2 for VK', () => {
    cy.log('WHEN User logs in the VK profile');
    cy.wait(10000);
  })

});

