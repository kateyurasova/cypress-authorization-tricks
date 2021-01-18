Cypress.Commands.add("loginWithToken", () => {
  cy.request({
    method: "POST",
    url: "https://alpha.unic-lab.by/api/auth/v1/login",
    body: {
      login: "user",
      password: "123456789",
    },
  });
});
