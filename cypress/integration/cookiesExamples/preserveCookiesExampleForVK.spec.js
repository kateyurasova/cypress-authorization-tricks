import * as loginData from '../../fixtures/login';
import VK_LoginPage from "../../page-objects/VK_LoginPage";

context('Features', () => {

    beforeEach(() => {
        //Cypress.Cookies.preserveOnce('XHR_STATS_TRANSPORT_META_web', 'XHR_STATS_TRANSPORT_DATA_LOCK_web')
        Cypress.Cookies.debug(true) // now Cypress will log when it alters cookies
        cy.preserveCookies();
    })

    it('Test 1 for VK', () => {
        cy.log('WHEN User logs in the VK profile');
        VK_LoginPage.open();
        VK_LoginPage.login(loginData.email, loginData.password);
        cy.log("AND performs some actions...")
        cy.wait(10000);
        cy.log("THEN Something happens")
        // Any test assert
    })

    it('Test 2 for VK', () => {
        //cy.log('WHEN User logs in the VK profile');
        //VK_LoginPage.open();
        // VK_LoginPage.login(loginData.email, loginData.password);
        cy.log('WHEN user is logged in AND opens the Login page');
        VK_LoginPage.open();
        cy.log("THEN User should be redirected to the /feed page");
        cy.get('div#side_bar_inner', {timeout: 10000}).should('be.visible', {timeout: 10000});
        cy.wait(10000);
    })

    /*
      it('Test 3 for VK', () => {
        cy.log('GIVEN User is already logged in ');
        VK_LoginPage.open();
        cy.get('div#side_bar_inner', { timeout: 1200000 }).should('be.visible', { timeout: 1200000 });
        cy.wait(10000);
      })

      it('Test 4 for VK', () => {
        cy.log('GIVEN User is already logged in ');
        VK_LoginPage.open();
        cy.wait(10000);
      })

      it('Test 5 for VK', () => {
        cy.log('GIVEN User is already logged in ');
        VK_LoginPage.open();
        cy.wait(10000);
      })

      it('Test 6 for VK', () => {
        cy.log('GIVEN User is already logged in ');
        VK_LoginPage.open();
        cy.wait(10000);
      })

      it('Test 7 for VK', () => {
        cy.log('GIVEN User is already logged in ');
        VK_LoginPage.open();
        cy.wait(10000);
      })

      it('Test 8 for VK', () => {
        cy.log('GIVEN User is already logged in ');
        VK_LoginPage.open();
        cy.wait(10000);
      })

      it('Test 9 for VK', () => {
        cy.log('GIVEN User is already logged in ');
        VK_LoginPage.open();
        cy.wait(10000);
      })

      it('Test 10 for VK', () => {
        cy.log('GIVEN User is already logged in ');
        VK_LoginPage.open();
        cy.wait(10000);
      })
    */
});

