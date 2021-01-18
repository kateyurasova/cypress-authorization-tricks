Cypress.Commands.add("loginWithToken", (username, password) => {
  cy.request({
    method: "POST",
    url: "https://alpha.unic-lab.by/api/auth/v1/login",
    body: {
      login: username,
      password: password,
    },
  })
    .its("body")
    .then((response) =>
      localStorage.setItem("accessToken", response.accessToken)
    );
});
