import * as loginData from '../../fixtures/vk_login.json';
import * as personalInfo from '../../fixtures/vk_personal_info.json';
import VK_LoginPage from "../../page-objects/VK_LoginPage";
import VK_ProfilePage from "../../page-objects/VK_ProfilePage";

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
        ['Моя страница', 'Новости', 'Мессенджер', 'Друзья', 'Сообщества', 'Фотографии', 'Музыка', 'Видео', 'Клипы',
            'Игры'
        ].forEach(menuItem => {
            cy.get('.LeftNav__icon').contains(menuItem).should('be.visible')
        })
    })

    it('Personal Info is presented in the User Profile', () => {
        cy.get('WHEN User is at the Profile page')
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

    it('Check My Photo section', () => {
        cy.get('WHEN User user goes to the the Profile page')
        VK_ProfilePage.open(personalInfo.personalPageLink)

        cy.log('THEN My photos label is presented at the page');
        cy.get('.header_label').contains('Мои фотографии').should('be.visible');
        cy.get('AND There are 4 photos presented in My Photos section');
        cy.get('#page_photos_module').should('be.visible').then(($el) => {
            expect(cy.wrap($el).contains('.page_square_photo')).to.be.eq(4)
        });
    })

});

