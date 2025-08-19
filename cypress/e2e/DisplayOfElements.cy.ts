describe("Test 1", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000");
  });

  it("should have banner element", () => {
    cy.get('[data-testid="banner"]').should("exist");
  });

  it("should have search input", () => {
    cy.get("input").should("have.length", 1);
  });

  it("should have url /", () => {
    cy.url().should("include", "/");
  });

  it("should have Sign in button", () => {
    cy.contains("button", "Sign in").should("exist");
  });

  it("should have Daily forecast button", () => {
    cy.contains("button", "Daily").should("exist");
  });

  it("should have Hourly forecast button", () => {
    cy.contains("button", "Hourly").should("exist");
  });
});
