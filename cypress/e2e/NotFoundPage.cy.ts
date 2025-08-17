describe("Weather page", () => {
  const baseUrl = "http://localhost:4000";

  it("should navigate to notFoundPage for invalid URL", () => {
    cy.visit(`${baseUrl}/odvvwefmo`);

    cy.get('[data-testid="not-found-page"]').should("exist");

    cy.contains("Page Not Found").should("be.visible");

    cy.url().should("include", "/odvvwefmo");
  });
});
