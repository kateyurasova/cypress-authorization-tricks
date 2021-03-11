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

    login(email, password) {
        let loginTimeout = Cypress.env('loginTimeout')
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();

        cy.get('div[id="side_bar_inner"]', {timeout: loginTimeout})
            .should('be.visible', {timeout: loginTimeout});
    }

}

export default new VK_LoginPage()
