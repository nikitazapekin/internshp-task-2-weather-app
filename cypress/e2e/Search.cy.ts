describe("SearchCitiesComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000");
  });

  it("should render search input and button", () => {
    cy.get("input").should("exist");
    cy.get("button").should("contain", "Search");
  });

  it("should show suggestions when typing in the input", () => {
    cy.get("input").type("London");
    cy.get('[data-testid="suggestions-wrapper"]').should("exist");
  });

  it("should successfully fetch cities from API", () => {
    cy.intercept("GET", "https://api.openweathermap.org/geo/1.0/direct*").as("apiRequest");

    cy.get("input").type("Ne");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
  });
});
