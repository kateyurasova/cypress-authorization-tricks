Cypress.Commands.add("preserveCookies", () => {
  Cypress.Cookies.preserveOnce('XSRF-TOKEN', 'cognito', '.DRIVEASPXAUTH', 'CognitoId', 'CognitoRefresh',
    'CognitoAccess', 'CognitoExpiration', 'CognitoPhoneVerified', '_ga', '_gid', '_gat', 'AWSALB')
})

Cypress.Commands.add("checkUserSession", () => {
  cy.getCookie(Cypress.env('authCookie').toString()).should('exist');
})
