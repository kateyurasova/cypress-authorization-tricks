import VK_LoginPage from "./VK_LoginPage";

class VK_ProfilePage {

    open(profileName) {
        cy.visit(`${VK_LoginPage.url}/${profileName}`);
    }

}

export default new VK_ProfilePage()
