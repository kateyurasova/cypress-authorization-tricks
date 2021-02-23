it("To catch response", () => {
  cy.request({
    method: "POST",
    url: "https://alpha.unic-lab.by/api/auth/v1/login",
    body: {
      login: "user",
      password: "123456789",
    },
  })
    .its("body")
    .then((response) => {
      cy.log(response);
      console.log(response);
    });
});
