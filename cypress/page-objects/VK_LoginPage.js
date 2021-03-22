class VK_LoginPage {

    get url() {
        return 'https://vk.com';
    }

    open() {
        cy.visit(this.url);
    }

    get passwordInput() {
        return cy.get("#index_pass");
    }

    get emailInput() {
        return cy.get('#index_email');
    }

    get loginButton() {
        return cy.get('#index_login_button');
    }

    waitForSideBarToBePresented() {
        let loginTimeout = Cypress.env('loginTotal')
        cy.get('li:contains("Моя страница")').should('be.visible', {timeout: loginTimeout});
    }

    setUpCredentialsAndClickLogin(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    }

    repeatLoginAttempt(email, password) {
        let TIMEOUT = Cypress.env('loginTotal');
        let CHECK_INTERVAL = Cypress.env('loginCheckInterval');
        for (let i = 0; i < TIMEOUT / CHECK_INTERVAL; i++) {
            cy.get('body').then(($body) => {
                if ($body.find('li:contains("Моя страница")').length) {
                    cy.log("SIDE BAR FOUND")
                    i = TIMEOUT / CHECK_INTERVAL;
                } else {
                    cy.log("WAIT")
                    cy.wait(CHECK_INTERVAL);
                }
            });
        }
        cy.get('body').then(($body) => {
            if ($body.find('[id="index_login_button"]').length) {
                cy.log("LOGIN BUTTON FOUND")
                this.setUpCredentialsAndClickLogin(email, password);
            }
        });
    }

    login(email, password) {
        this.setUpCredentialsAndClickLogin(email, password);
        this.repeatLoginAttempt(email, password);
        this.waitForSideBarToBePresented();
    }

}

export default new VK_LoginPage()
