describe("App Component", () => {
  it("should render the App component", () => {
    cy.get("div").should("exist");
  });
  it("should have exactly one div element", () => {
    cy.get("div").should("have.length", 1);
  });
  it("should have search input", () => {
    cy.visit("http://localhost:4000");
    cy.get("input").should("have.length", 1);
  });
});
