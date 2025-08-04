describe("App Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the App component", () => {
    cy.get("div").should("exist");
  });
  it('should display "Hello world!" text', () => {
    cy.contains("Hello world!").should("be.visible");
  });
  it("should have exactly one div element", () => {
    cy.get("div").should("have.length", 1);
  });
});
