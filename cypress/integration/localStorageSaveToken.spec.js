describe("Avoid multy login via UI by saving token to Local Storage", () => {
  it("User logs in via UI and enters General page", () => {
    //TODO
  });

  it("User goes to General page without ", () => {
    cy.visit("https://alpha.unic-lab.by/general");
    cy.url().should("include", "general");
  });
});
