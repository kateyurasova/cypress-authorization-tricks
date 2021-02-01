export const loginInputField = `[name='login']`;
export const passwordInputField = `[name='password']`;
export const loginButton = `.base-button__btn--base-state`;

export default class LoginPage {
  static ordinaryUserLogin(username, password) {
    cy.get(loginInputField).clear().type(username);
    cy.get(passwordInputField).clear().type(password);
    cy.get(loginButton).click();
  }
}
