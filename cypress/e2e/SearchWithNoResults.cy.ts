describe("SearchCitiesComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000");
  });

  it("should validate API response structure matches mock data", () => {
    const mockResponse: unknown = [];

    cy.intercept("GET", `${Cypress.env("REACT_APP_API_URL")}/geo/1.0/direct*`, {
      statusCode: 200,
      body: mockResponse,
    }).as("getCities");

    cy.get("input").type("dddddddddddddddddddddddddddddddddd");
    cy.get('[data-testid="spinner"]').should("exist");
    cy.wait("@getCities").then((interception) => {
      const response = interception.response?.body;

      expect(response).to.be.an("array");
    });
    cy.get('[data-testid="spinner"]').should("not.exist");
    cy.get('[data-testid="no-suggestions"]').should("exist");
  });
});
