import * as loginData from '../../../fixtures/vk_login.json';
import * as personalInfo from '../../../fixtures/vk_personal_info.json';
import * as VK_data from '../../../fixtures/VK_left_menu_options.json'
import VK_LoginPage from "../../../page-objects/VK_LoginPage";
import VK_ProfilePage from "../../../page-objects/VK_ProfilePage";

context('Features in VK', () => {

    beforeEach(() => {
        cy.log('WHEN User logs in the VK app');
        VK_LoginPage.open();
        VK_LoginPage.login(loginData.email, loginData.password);
    })

    it('Check the left menu', () => {
        cy.log('THEN User is redirected to /feed page');
        cy.url().should('include', 'feed');
        cy.log('AND User is able to see the left menu options');
        VK_data.leftMenuOptions.forEach(menuItem => {
            cy.get('#side_bar_inner').find(`li:contains(${menuItem})`).should('be.visible')
        })
    })

    it('Personal Info is presented in the User Profile', () => {
        cy.log('WHEN User is at the Profile page')
        VK_ProfilePage.open(personalInfo.personalPageLink)

        cy.log('THEN Personal Information is presented on it');
        [
            {field: 'День рождения', value: personalInfo.birthDay},
            {field: 'День рождения', value: personalInfo.birthYear},
            {field: 'Город', value: personalInfo.city},
            {field: 'Образование', value: personalInfo.education}
        ].forEach(item => {
            cy.get('.label').contains(item.field).next().should('contain', item.value);
        })
    })

});

