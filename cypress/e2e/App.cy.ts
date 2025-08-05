describe("App Component", () => {
  it("should render the App component", () => {
    cy.get("div").should("exist");
  });

  it("should have exactly one div element", () => {
    cy.get("div").should("have.length", 1);
  });
});
